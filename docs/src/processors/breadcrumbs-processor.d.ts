import Processor from './base/processor';
import Entity from '../model/entity';
export default class BreadcrumbsProcessor extends Processor<any> {
    process(breadcrumbs: any, entity: Entity): Promise<void>;
}
