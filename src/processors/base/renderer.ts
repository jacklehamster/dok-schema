import Processor from './processor';
import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';

export default abstract class Renderer<T extends Auxiliary> extends Processor<T> {
    active: boolean = false;
    div: HTMLDivElement = document.createElement('div');
    refresh: FrameRequestCallback = () => {};

    async process(auxiliary: T, entity: Entity): Promise<void> {
        this.refresh = () => {
            this.render(this.div, auxiliary, entity);
            if (this.active) {
                requestAnimationFrame(this.refresh);
            }
        };
        if (!auxiliary?.initiallyInactive) {
            this.setActive(true);
        }
        await this.onCreate();
    }

    setActive(active: boolean) {
        this.active = active;
        if (this.active) {
            requestAnimationFrame(this.refresh);
        }
    }

    async onCreate(): Promise<void> {
        document.body.appendChild(this.div);
    }

    async onExit(): Promise<void> {
        document.body.removeChild(this.div);
        this.setActive(false);
    }

    abstract render(div: HTMLDivElement, auxiliary: T, entity: Entity): void;
}