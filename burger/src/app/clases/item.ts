import { Adicionales } from "./adicionales";
import { Carnes } from "./carnes";

export class Item {
 item : string| undefined;
 precio: number| undefined;
 cantidad: any| undefined;
 adicionales?: Adicionales[] | undefined
 carnes?: Carnes[] | undefined
}