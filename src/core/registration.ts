import Engine from './engine';
import {WorkspaceProcessor, ApplicationProcessor, TitleProcessor, MessageProcessor} from '../processors';
import PropertyProcessor from '../processors/property-processor';
import BreadcrumbsProcessor from '../processors/breadcrumbs-processor';

export default class Registration {
    static execute(engine: Engine) {
        engine.register("Workspace", new WorkspaceProcessor());
        engine.register("Application", new ApplicationProcessor());
        engine.register("Title", new TitleProcessor());
        engine.register("Message", new MessageProcessor());
        engine.register("Id", new PropertyProcessor<string>("id"));
        engine.register("Breadcrumbs", new BreadcrumbsProcessor());
    }
}
