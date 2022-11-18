import Processor from './base/processor';

export default class TitleProcessor extends Processor<string> {
    async process(title: string): Promise<void> {
        document.title = title;
    }
}
