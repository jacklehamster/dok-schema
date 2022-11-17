import Processor from './processor';
import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';

interface ListAuxiliary extends Auxiliary {
    index?: number;
}

export default class ContainerProcessor<T extends ListAuxiliary> extends Processor<T> {
    listProperty: string;

    constructor(listProperty: string) {
        super();
        this.listProperty = listProperty;
    }

    async process(container: T, entity: Entity): Promise<void> {
        const listProp = container[this.listProperty];
        const elements: Entity[] = Array.isArray(listProp) ? listProp : [];
        const element = elements[container.index ?? 0];
        await this.engine?.process(element);
    }
}