import DivRenderer from './base/div-renderer';
import Entity from '../model/entity';

export default class MessageProcessor extends DivRenderer<string> {
    render(message: string, entity: Entity): boolean | void {
        const div = this.div;
        div.style.position = "absolute";
        div.style.left = "0px";
        div.style.backgroundColor = "silver";
        div.style.width = "100%";
        div.style.padding = "10px";
        div.style.margin = "0px";
        div.style.opacity = ".8";
        div.textContent = `${message}`;
    }
}
