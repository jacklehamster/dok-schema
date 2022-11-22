import Processor from './base/processor';
import Auxiliary from '../model/auxiliary';
import Entity from '../model/entity';
export default class PropertyProcessor<T extends (Auxiliary | string)> extends Processor<T> {
    name: string;
    constructor(name: string);
    process(property: T, entity: Entity): Promise<void>;
}
