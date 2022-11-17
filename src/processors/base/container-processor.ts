import Entity from '../../model/entity';
import Auxiliary from '../../model/auxiliary';
import Renderer from './renderer';

interface ListAuxiliary extends Auxiliary {
    index?: number;
}

export default class ContainerProcessor<T extends ListAuxiliary> extends Renderer<T> {
    listProperty: string;

    constructor(listProperty: string) {
        super();
        this.listProperty = listProperty;
    }

    getEntities(container: T): Entity[] {
        const listProp = container[this.listProperty];
        return Array.isArray(listProp) ? listProp : [];
    }

    async process(container: T, entity: Entity): Promise<void> {
        await super.process(container, entity);
        const element = this.getEntities(container)[container.index ?? -1];
        if (element) {
            await this.engine?.process(element);
        }
    }

    render(div: HTMLDivElement, container: T, entity: Entity): void {
        div.innerText = "";
        this.getEntities(container).forEach(entity => {
           const link = div.appendChild(document.createElement('div'));
           link.style.color = "blue";
           link.style.textDecoration = "underline";
           link.style.cursor = "pointer";
           link.addEventListener("mousedown", () => {
               this.engine?.process(entity);
           });
           const name = entity.Name;
           link.innerText = `${name}`;
        });
    }
}