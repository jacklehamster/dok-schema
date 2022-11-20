import Engine from './core/engine';
import helloWorldEntity from '../docs/samples/hello-world.json'
import Registration from './core/registration';
import {FileUtils} from 'dok-file-utils';

const rootPath = "samples/hello-world.json"

declare var globalThis: {
    exports: typeof exports;
};

async function main() {
    const engine = new Engine();
    Registration.execute(engine);

    const fileUtils = new FileUtils(XMLHttpRequest);
    const helloWorld = await fileUtils.load(rootPath, 'json');

    await engine.process(helloWorld);
}

const exports = {
    main,
}

export default exports;

globalThis.exports = exports;
