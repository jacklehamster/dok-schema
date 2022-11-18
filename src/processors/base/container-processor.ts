import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
import DivRenderer from './div-renderer';

interface ListAuxiliary extends Auxiliary {
    index?: number;
}

export default class ContainerProcessor<T extends ListAuxiliary> extends DivRenderer<T> {
    listProperty: string;

    constructor(listProperty: string) {
        super();
        this.listProperty = listProperty;
    }

    getEntities(container: T): Entity[] {
        const listProp = container[this.listProperty];
        return Array.isArray(listProp) ? listProp : [];
    }

    activeElement(container: T) {
        return this.getEntities(container)[container.index ?? -1];
    }

    async process(container: T, entity: Entity): Promise<void> {
        await super.process(container, entity);
        const element = this.activeElement(container);
        if (element) {
            await this.engine?.process(element);
        }
    }

    render(container: T, entity: Entity): void {
        const div: HTMLDivElement = this.div;
        div.innerText = "";
        this.getEntities(container).forEach(entity => {
           const link = div.appendChild(document.createElement('div'));
           link.style.color = "blue";
           link.style.textDecoration = "underline";
           link.style.cursor = "pointer";
           link.addEventListener("mousedown", () => {
               this.engine?.process(entity);
           });
           link.innerText = `${entity.Id}`;
        });
    }
}