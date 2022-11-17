import Engine from './core/engine';
import helloWorldEntity from '../docs/samples/hello-world.json'
import ContainerProcessor from './processors/container-processor';
import Workspace from './auxiliaries/workspace';
import Application from './auxiliaries/application';
import TitleProcessor from './processors/title-processor';
import MessageProcessor from './processors/message-processor';
import WorkspaceProcessor from './processors/workspace-processor';
import ApplicationProcessor from './processors/application-processor';

declare var globalThis: {
    exports: typeof exports;
};

async function main() {
    const engine = new Engine();
    engine.register("Workspace", new WorkspaceProcessor());
    engine.register("Application", new ApplicationProcessor());
    engine.register("Title", new TitleProcessor());
    engine.register("Message", new MessageProcessor());
    await engine.process(helloWorldEntity);
}

const exports = {
    main,
}

export default exports;

globalThis.exports = exports;
