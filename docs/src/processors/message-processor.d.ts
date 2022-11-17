import Processor from './base/processor';
export default class MessageProcessor extends Processor<string> {
    process(message: string): Promise<void>;
}
