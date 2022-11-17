import Entity from '../model/entity';
import Processor from '../processors/base/processor';
import Auxiliary, {AuxiliaryName} from '../model/auxiliary';

const AUX_REGEX = /^[A-Z]/;

export default class Engine {
    entity?: Entity;

    readonly registration: { [key: AuxiliaryName | string]: Processor<any> | undefined } = {};

    register<T extends Auxiliary>(name: AuxiliaryName, processor: Processor<any>) {
        this.registration[name] = processor;
        processor.engine = this;
    }

    getEntries(entity?: Entity): {name: string; processor: Processor<any> | undefined; auxiliary: Auxiliary}[] {
        if (!entity) {
            return [];
        }
        return Object.entries(entity)
            .filter(([key]) => key.match(AUX_REGEX))
            .sort(([ key1 ], [key2]) => key1.localeCompare(key2))
            .map(([name, auxiliary]) => ({
                name,
                auxiliary,
                processor: this.registration[name],
            }));
    }

    async process(entity?: Entity): Promise<void> {
        if (!entity) {
            console.warn("No entity to process.");
            return;
        }
        for (const {processor} of this.getEntries(this.entity)) {
            await processor?.onExit?.();
        }

        this.entity = entity;
        const entries = this.getEntries(entity);

        for (const {name, processor, auxiliary} of entries) {
            if (!processor) {
                console.warn(`No processor for auxiliary: ${name}`);
            }
           await processor?.process?.(auxiliary, entity);
        }
    }
}