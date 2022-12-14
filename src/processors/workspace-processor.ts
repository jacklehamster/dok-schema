import Workspace from "../auxiliaries/workspace";
import ContainerProcessor from "./base/container-processor";

export default class WorkspaceProcessor extends ContainerProcessor<Workspace> {
    constructor() {
        super("apps");
    }
}
