import Processor from './base/processor';
export default class TitleProcessor extends Processor<string> {
    process(title: string): Promise<void>;
}
