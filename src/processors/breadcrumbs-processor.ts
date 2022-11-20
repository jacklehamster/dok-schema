import Entity from '../model/entity';
import DivRenderer from './base/div-renderer';

export default class BreadcrumbsProcessor extends DivRenderer<any> {
    render(auxiliary: any, entity: Entity): void {
        const div: HTMLDivElement = this.div;
        div.innerText = "";
        const link = div.appendChild(document.createElement('div'));
        link.style.color = "blue";
        link.style.textDecoration = "underline";
        link.style.cursor = "pointer";
        link.addEventListener("mousedown", () => {
            this.engine?.process(entity);
        });
        link.innerText = `Workspace`;
    }
}
