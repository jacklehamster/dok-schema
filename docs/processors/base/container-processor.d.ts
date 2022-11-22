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
    constructor(listProperty: string);
    getEntities(container: T): Entity[];
    process(container: T, entity: Entity): Promise<void>;
    render(auxiliary: T, entity: Entity): void;
}
export {};
