import Auxiliary from '../../model/auxiliary';
import Renderer from './renderer';
export interface LinkOptions {
    box?: boolean;
}
export default abstract class DivRenderer<T extends (Auxiliary | string)> extends Renderer<T> {
    div: HTMLDivElement;
    onCreate(): Promise<void>;
    onExit(): Promise<void>;
    addLink(text: string, { box }: LinkOptions, action?: () => void): void;
}
