import Processor from './processor';
import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';

export default abstract class Renderer<T extends Auxiliary> extends Processor<T> {
    active: boolean = false;
    refresh: FrameRequestCallback = () => {};

    async process(auxiliary: T, entity: Entity): Promise<void> {
        this.refresh = () => {
            this.render(auxiliary, entity);
            if (this.active) {
                requestAnimationFrame(this.refresh);
            }
        };
        if (!auxiliary?.initiallyInactive) {
            this.setActive(true);
        }
    }

    setActive(active: boolean) {
        this.active = active;
        if (this.active) {
            requestAnimationFrame(this.refresh);
        }
    }

    abstract render(auxiliary: T, entity: Entity): void;
}