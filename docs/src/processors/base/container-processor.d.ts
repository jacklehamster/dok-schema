import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
import DivRenderer from './div-renderer';
interface ListAuxiliary extends Auxiliary {
    index?: number;
}
export default class ContainerProcessor<T extends ListAuxiliary> extends DivRenderer<T> {
    listProperty: string;
    constructor(listProperty: string);
    getEntities(container: T): Entity[];
    activeElement(container: T): Entity;
    process(container: T, entity: Entity): Promise<void>;
    render(container: T, entity: Entity): void;
}
export {};
