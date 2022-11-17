import Application from "../auxiliaries/application";
import Workspace from "../auxiliaries/workspace";
import ContainerProcessor from "./container-processor";

export default class WorkspaceProcessor extends ContainerProcessor<Workspace> {
    constructor() {
        super("apps");
    }
}