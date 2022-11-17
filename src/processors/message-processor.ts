import Processor from './base/processor';

export default class MessageProcessor extends Processor<string> {
    async process(message: string): Promise<void> {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "0px";
        div.style.left = "0px";
        div.style.backgroundColor = "silver";
        div.style.width = "100%";
        div.style.padding = "5px";
        div.style.margin = "0px";
        div.style.opacity = ".8";
        div.style.cursor = "pointer";
        div.addEventListener("mousedown", () => document.body.removeChild(div));
        document.body.appendChild(div);
        div.textContent = `${message}`;
    }
}
