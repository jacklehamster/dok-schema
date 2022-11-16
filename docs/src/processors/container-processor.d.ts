import Processor from './processor';
import Entity from '../model/entity';
import Auxiliary from '../model/auxiliary';
interface ListAuxiliary extends Auxiliary {
    index?: number;
}
export default class ContainerProcessor<T extends ListAuxiliary> extends Processor<T> {
    listProperty: string;
    constructor(listProperty: string);
    process(container: T, entity: Entity): Promise<void>;
}
export {};
