import Entity from '../model/entity';
import Processor from '../processors/base/processor';
import Auxiliary from '../model/auxiliary';
import Registration from './registration';

const AUX_REGEX = /^[A-Z]/;

export default class Engine {
    entity?: Entity;

    readonly registration: Registration = new Registration(this);

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
                processor: this.registration.getProcessor(name),
            }));
    }

    async process(entity?: Entity): Promise<void> {
        if (!entity) {
            console.warn("No entity to process.");
            return;
        }
        {
            const promises = [];
            for (const {processor} of this.getEntries(this.entity)) {
                promises.push(processor?.onExit?.());
            }
            await Promise.all(promises);
        }

        this.entity = entity;
        const entries = this.getEntries(entity);

        for (const {name, processor} of entries) {
            if (!processor) {
                console.warn(`No processor for auxiliary: ${name}`);
            }
        }

        {
            const promises = [];
            for (const {processor, auxiliary} of entries) {
                promises.push(processor?.onCreate(auxiliary, entity));
            }
            await Promise.all(promises);
        }

        {
            const promises = [];
            for (const {processor, auxiliary} of entries) {
                promises.push(processor?.process?.(auxiliary, entity));
            }
            await Promise.all(promises);
        }
    }
}