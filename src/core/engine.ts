import Entity from '../model/entity';
import Processor from '../processors/processor';
import Auxiliary, {AuxiliaryName} from '../model/auxiliary';

const AUX_REGEX = /^[A-Z]/;

export default class Engine {
    readonly registration: { [key: AuxiliaryName | string]: Processor<any> | undefined } = {};

    register<T extends Auxiliary>(name: AuxiliaryName, processor: Processor<any>) {
        this.registration[name] = processor;
        processor.engine = this;
    }

    async process(entity?: Entity): Promise<void> {
        if (!entity) {
            console.log("No entity to process.");
            return;
        }
        const entries = Object.entries(entity)
            .filter(([key]) => key.match(AUX_REGEX))
            .sort(([ key1 ], [key2]) => key1.localeCompare(key2))
            .map(([name, auxiliary]) => ({
                name,
                auxiliary,
                processor: this.registration[name],
            }));

        for (const {name, processor, auxiliary} of entries) {
            if (!processor) {
                console.warn(`No processor for auxiliary: ${name}`);
            }
           await processor?.process?.(auxiliary, entity);
        }
    }
}