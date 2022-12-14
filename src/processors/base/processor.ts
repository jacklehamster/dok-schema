import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
import Engine from '../../core/engine';

export default abstract class Processor<T extends (Auxiliary | string)> {
    engine: Engine | undefined;
    abstract process(auxiliary: T, entity: Entity): Promise<void>;
    async onCreate(auxiliary: T, entity: Entity): Promise<void> {
    }

    async onExit(): Promise<void> {
    }
}