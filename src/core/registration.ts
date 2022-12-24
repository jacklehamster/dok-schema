import Engine from './engine';
import PropertyProcessor from '../processors/property-processor';
import BreadcrumbsProcessor from '../processors/breadcrumbs-processor';
import WorkspaceProcessor from '../processors/workspace-processor';
import ApplicationProcessor from '../processors/application-processor';
import TitleProcessor from '../processors/title-processor';
import MessageProcessor from '../processors/message-processor';
import Auxiliary, {AuxiliaryName} from '../model/auxiliary';
import Processor from '../processors/base/processor';

export default class Registration {
    engine: Engine;
    registration: {
        [key: AuxiliaryName | string]: Processor<any> | undefined;
    } = {}

    constructor(engine: Engine) {
        this.engine = engine;
        this.executeRegistration();
    }

    register<T extends Auxiliary>(name: AuxiliaryName, processor: Processor<any>) {
        this.registration[name] = processor;
        processor.engine = this.engine;
    }

    getProcessor(name: AuxiliaryName | string) {
        return this.registration[name];
    }

    executeRegistration() {
        this.register("Workspace", new WorkspaceProcessor());
        this.register("Application", new ApplicationProcessor());
        this.register("Title", new TitleProcessor());
        this.register("Message", new MessageProcessor());
        this.register("Id", new PropertyProcessor<string>("id"));
        this.register("Breadcrumbs", new BreadcrumbsProcessor());
    }
}
