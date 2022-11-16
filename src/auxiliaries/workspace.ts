import Entity from '../model/entity';

export default interface Workspace {
    apps: Entity[];
    index?: number;
}