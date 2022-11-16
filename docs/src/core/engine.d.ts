import Entity from '../model/entity';
import Processor from '../processors/processor';
import Auxiliary, { AuxiliaryName } from '../model/auxiliary';
export default class Engine {
    readonly registration: {
        [key: AuxiliaryName | string]: Processor<any> | undefined;
    };
    register<T extends Auxiliary>(name: AuxiliaryName, processor: Processor<any>): void;
    process(entity?: Entity): Promise<void>;
}
