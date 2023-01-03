import Auxiliary from '../../model/auxiliary';
import Renderer from './renderer';

export interface LinkOptions {
    box?: boolean;
}

export default abstract class DivRenderer<T extends (Auxiliary | string)> extends Renderer<T> {
    div: HTMLDivElement = document.createElement('div');

    async onCreate(): Promise<void> {
        document.body.appendChild(this.div);
        this.div.style.display = "flex";
    }

    async onExit(): Promise<void> {
        document.body.removeChild(this.div);
        this.setActive(false);
    }

    addLink(text: string, { box }: LinkOptions, action?: () => void) {
        const line = this.div.appendChild(document.createElement("div"));
        if (box) {
            line.style.padding = "5px";
            line.style.margin = "5px";
            line.style.borderRadius = "5px";
            line.style.height = "50px";
            line.style.backgroundColor = "silver";
        }
        line.style.color = action ? "blue" : "";
        line.style.textDecoration = action ? "underline" : "";
        line.style.cursor = action ? "pointer" : "";
        if (action) {
            line.addEventListener("mousedown", action);
        }
        line.innerText = text;
    }
}
