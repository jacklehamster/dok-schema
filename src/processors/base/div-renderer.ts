import Auxiliary from '../../model/auxiliary';
import Renderer from './renderer';

export default abstract class DivRenderer<T extends (Auxiliary | string)> extends Renderer<T> {
    div: HTMLDivElement = document.createElement('div');

    async onCreate(): Promise<void> {
        document.body.appendChild(this.div);
    }

    async onExit(): Promise<void> {
        document.body.removeChild(this.div);
        this.setActive(false);
    }

    addLink(text: string, action?: () => void) {
        const line = this.div.appendChild(document.createElement("div"));
        line.style.color = action ? "blue" : "";
        line.style.textDecoration = action ? "underline" : "";
        line.style.cursor = action ? "pointer" : "";
        if (action) {
            line.addEventListener("mousedown", action);
        }
        line.innerText = text;
    }
}
