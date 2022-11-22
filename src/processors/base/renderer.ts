import Processor from './processor';
import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';

export default abstract class Renderer<T extends (Auxiliary | string)> extends Processor<T> {
    active: boolean = false;
    refresh: FrameRequestCallback = () => {};

    async process(auxiliary: T, entity: Entity): Promise<void> {
        this.refresh = () => {
            const keepRendering = this.render(auxiliary, entity);
            if (this.active && keepRendering) {
                requestAnimationFrame(this.refresh);
            }
        };
        if (typeof(auxiliary) !== "object" || !auxiliary?.initiallyInactive) {
            this.setActive(true);
        }
    }

    setActive(active: boolean) {
        this.active = active;
        if (this.active) {
            requestAnimationFrame(this.refresh);
        }
    }

    abstract render(auxiliary: T, entity: Entity): boolean | void;
}