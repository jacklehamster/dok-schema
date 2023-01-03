import Entity from '../model/entity';
import DivRenderer from './base/div-renderer';

export default class BreadcrumbsProcessor extends DivRenderer<string> {
    async onCreate(): Promise<void> {
        document.body.insertBefore(this.div, document.body.firstChild);
    }

    render(separator: string, entity: Entity) {
        const entities = [];
        for (let e: Entity | undefined = entity; e; e = e.parent) {
            entities.unshift(e);
        }

        const div = this.div;
        div.innerText = "";
        div.style.display = "flex";
        div.style.flexDirection = "row";
        for (let i = 0; i < entities.length; i++) {
            if (i !== 0) {
                this.addSeparator(div, separator);
            }
            this.addComponent(entities[i], entities[i] !== entity);
        }
    }

    addSeparator(div: HTMLDivElement, separator: string) {
        const separatorDiv = div.appendChild(document.createElement('div'));
        separatorDiv.style.margin = "0 5px";
        separatorDiv.innerText = separator;
    }

    addComponent(entity: Entity, link: boolean) {
        this.addLink(`${entity?.Id}`, {}, !link ? undefined : () => {
            this.engine?.process(entity);
        });
    }
}
