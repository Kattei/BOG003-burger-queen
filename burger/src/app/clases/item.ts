import { Adicionales } from "./adicionales";
import { Carnes } from "./carnes";

export class Item {
 nombre : string = "";
 precio: number = 0
 cantidad: any| undefined;
 adicionales?: Adicionales[] | undefined
 carnes?: Carnes[] | undefined
  includes: any;
  
}