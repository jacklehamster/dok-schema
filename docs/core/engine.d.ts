import Entity from '../model/entity';
import Processor from '../processors/base/processor';
import Auxiliary from '../model/auxiliary';
import Registration from './registration';
export default class Engine {
    entity?: Entity;
    readonly registration: Registration;
    getEntries(entity?: Entity): {
        name: string;
        processor: Processor<any> | undefined;
        auxiliary: Auxiliary;
    }[];
    process(entity?: Entity): Promise<void>;
}
