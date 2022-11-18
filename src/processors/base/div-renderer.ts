import Auxiliary from '../../model/auxiliary';
import Renderer from './renderer';

export default abstract class DivRenderer<T extends Auxiliary> extends Renderer<T> {
    div: HTMLDivElement = document.createElement('div');

    async onCreate(): Promise<void> {
        document.body.appendChild(this.div);
    }

    async onExit(): Promise<void> {
        document.body.removeChild(this.div);
        this.setActive(false);
    }
}
