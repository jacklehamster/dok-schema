import Engine from './core/engine';
import helloWorldEntity from '../docs/samples/hello-world.json'
import Registration from './core/registration';

declare var globalThis: {
    exports: typeof exports;
};

async function main() {
    const engine = new Engine();
    Registration.execute(engine);
    await engine.process(helloWorldEntity);
}

const exports = {
    main,
}

export default exports;

globalThis.exports = exports;
