import Processor from './processor';
import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
export default abstract class Renderer<T extends Auxiliary> extends Processor<T> {
    active: boolean;
    refresh: FrameRequestCallback;
    process(auxiliary: T, entity: Entity): Promise<void>;
    setActive(active: boolean): void;
    abstract render(auxiliary: T, entity: Entity): void;
}
