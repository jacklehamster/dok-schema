import Engine from './core/engine';
import Registration from './core/registration';
import {FileUtils} from 'dok-file-utils';
import Entity from './model/entity';

const rootPath = "samples/hello-world.json"

declare var globalThis: {
    exports: typeof exports;
    root: Entity;
    engine: Engine;
};

async function main() {
    const engine = new Engine();
    Registration.execute(engine);

    const fileUtils = new FileUtils(XMLHttpRequest);
    const helloWorld = await fileUtils.load(rootPath, 'json');

    await engine.process(helloWorld);

    globalThis.root = helloWorld;
    globalThis.engine = engine;
}

const exports = {
    main,
}

export default exports;

globalThis.exports = exports;
