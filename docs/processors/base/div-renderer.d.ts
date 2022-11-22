import Auxiliary from '../../model/auxiliary';
import Renderer from './renderer';
export default abstract class DivRenderer<T extends (Auxiliary | string)> extends Renderer<T> {
    div: HTMLDivElement;
    onCreate(): Promise<void>;
    onExit(): Promise<void>;
    addLink(text: string, action?: () => void): void;
}
