import Entity from '../model/entity';
import DivRenderer from './base/div-renderer';
export default class BreadcrumbsProcessor extends DivRenderer<string> {
    onCreate(): Promise<void>;
    render(separator: string, entity: Entity): void;
    addSeparator(div: HTMLDivElement, separator: string): void;
    addComponent(entity: Entity, link: boolean): void;
}
