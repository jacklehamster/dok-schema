import Processor from './processor';
import Entity from '../model/entity';
import Workspace from '../auxiliaries/workspace';
export default class WorkspaceProcessor extends Processor<Workspace> {
    process(workspace: Workspace, entity: Entity): Promise<void>;
}
