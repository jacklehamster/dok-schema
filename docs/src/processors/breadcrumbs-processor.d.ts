import Entity from '../model/entity';
import DivRenderer from './base/div-renderer';
export default class BreadcrumbsProcessor extends DivRenderer<any> {
    render(auxiliary: any, entity: Entity): void;
}
