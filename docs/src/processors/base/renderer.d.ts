import Processor from './processor';
import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
export default abstract class Renderer<T extends Auxiliary> extends Processor<T> {
    active: boolean;
    div: HTMLDivElement;
    refresh: FrameRequestCallback;
    process(auxiliary: T, entity: Entity): Promise<void>;
    setActive(active: boolean): void;
    onCreate(): Promise<void>;
    onExit(): Promise<void>;
    abstract render(div: HTMLDivElement, auxiliary: T, entity: Entity): void;
}
