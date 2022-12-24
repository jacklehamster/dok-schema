import Engine from './engine';
import Auxiliary, { AuxiliaryName } from '../model/auxiliary';
import Processor from '../processors/base/processor';
export default class Registration {
    engine: Engine;
    registration: {
        [key: AuxiliaryName | string]: Processor<any> | undefined;
    };
    constructor(engine: Engine);
    register<T extends Auxiliary>(name: AuxiliaryName, processor: Processor<any>): void;
    getProcessor(name: AuxiliaryName | string): Processor<any> | undefined;
    executeRegistration(): void;
}
