import Entity from '../model/entity';
import Processor from '../processors/base/processor';
import Auxiliary, { AuxiliaryName } from '../model/auxiliary';
export default class Engine {
    entity?: Entity;
    readonly registration: {
        [key: AuxiliaryName | string]: Processor<any> | undefined;
    };
    register<T extends Auxiliary>(name: AuxiliaryName, processor: Processor<any>): void;
    getEntries(entity?: Entity): {
        name: string;
        processor: Processor<any> | undefined;
        auxiliary: Auxiliary;
    }[];
    process(entity?: Entity): Promise<void>;
}
