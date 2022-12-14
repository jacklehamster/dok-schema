import Processor from './base/processor';
import Auxiliary from '../model/auxiliary';
export default class PropertyProcessor<T extends (Auxiliary | string)> extends Processor<T> {
    property: T | undefined;
    process(property: T): Promise<void>;
}
