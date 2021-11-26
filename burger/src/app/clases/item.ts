import { Adicionales } from "./adicionales";
import { Carnes } from "./carnes";

export class Item {
 nombre : string = "";
 precio: number| undefined;
 cantidad: any| undefined;
 adicionales?: Adicionales[] | undefined
 carnes?: Carnes[] | undefined
  includes: any;
  
}