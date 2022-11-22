import Auxiliary, { AuxiliaryName } from './auxiliary';
export default interface Entity {
    "$schema": string;
    [key: AuxiliaryName]: Auxiliary;
    [key: string]: any;
}
