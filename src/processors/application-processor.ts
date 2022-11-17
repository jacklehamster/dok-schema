import Application from "../auxiliaries/application";
import ContainerProcessor from "./container-processor";

export default class ApplicationProcessor extends ContainerProcessor<Application> {
    constructor() {
        super("scenes");
    }
}