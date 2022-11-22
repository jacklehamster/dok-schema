import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
import Processor from './processor';
interface ListAuxiliary extends Auxiliary {
    index?: number;
}
export default class ContainerProcessor<T extends ListAuxiliary> extends Processor<T> {
    listProperty: string;
    constructor(listProperty: string);
    getEntities(container: T): Entity[];
    activeElement(container: T): Entity;
    process(container: T, entity: Entity): Promise<void>;
}
export {};
