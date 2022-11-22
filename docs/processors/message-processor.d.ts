import DivRenderer from './base/div-renderer';
import Entity from '../model/entity';
export default class MessageProcessor extends DivRenderer<string> {
    render(message: string, entity: Entity): boolean | void;
}
