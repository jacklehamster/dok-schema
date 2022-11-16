import Processor from './processor';
import Entity from '../model/entity';

export default class TitleProcessor extends Processor<string> {
    async process(title: string): Promise<void> {
        document.title = title;
    }
}