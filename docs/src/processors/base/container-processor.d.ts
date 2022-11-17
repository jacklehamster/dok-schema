import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
import Renderer from './renderer';
interface ListAuxiliary extends Auxiliary {
    index?: number;
}
export default class ContainerProcessor<T extends ListAuxiliary> extends Renderer<T> {
    listProperty: string;
    constructor(listProperty: string);
    getEntities(container: T): Entity[];
    process(container: T, entity: Entity): Promise<void>;
    render(div: HTMLDivElement, container: T, entity: Entity): void;
}
export {};
