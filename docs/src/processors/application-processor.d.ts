import Processor from './processor';
import Entity from '../model/entity';
import Application from '../auxiliaries/application';
export default class ApplicationProcessor extends Processor<Application> {
    process(app: Application, entity: Entity): Promise<void>;
}
