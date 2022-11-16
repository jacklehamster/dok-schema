import Entity from '../model/entity';

export default interface Application {
    scenes: Entity[];
    index?: number;
}