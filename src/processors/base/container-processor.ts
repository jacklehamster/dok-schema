import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
import DivRenderer from './div-renderer';

interface ListAuxiliary extends Auxiliary {
    index?: number;
}

export interface ContainerEntity {
    isContainer?: () => boolean;
    getEntities?: () => Entity[];
    getActiveEntity?: () => Entity | undefined;
    setActiveEntity?: (entity: Entity) => void;
    index?: number;
}

export default class ContainerProcessor<T extends ListAuxiliary> extends DivRenderer<T> {
    listProperty: string;

    constructor(listProperty: string) {
        super();
        this.listProperty = listProperty;
    }

    getEntities(container: T): Entity[] {
        const listProp = container[this.listProperty];
        return Array.isArray(listProp) ? listProp : [];
    }

    async process(container: T, entity: Entity): Promise<void> {
        await super.process(container, entity);
        const containerEntity: ContainerEntity = entity as ContainerEntity;

        containerEntity.isContainer = () => true;
        containerEntity.getEntities = () => this.getEntities(container);
        containerEntity.getActiveEntity = () => containerEntity.getEntities?.()[entity.index ?? -1];
        containerEntity.setActiveEntity = (value: Entity) => containerEntity.index = containerEntity.getEntities?.()?.indexOf(value);
        containerEntity.getEntities().forEach(e => e.parent = entity);
    }

    render(auxiliary: T, entity: Entity): void {
        this.div.innerText = "";
        const containerEntity: ContainerEntity = entity as ContainerEntity;
        containerEntity.getEntities?.().forEach(e => {
            this.addLink(`${e?.Id}`, { box: true }, () => {
                containerEntity.setActiveEntity?.(e);
                this.engine?.process(e);
            });
        });
    }
}