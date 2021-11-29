import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicarPrecio'
})
export class MultiplicarPrecioPipe implements PipeTransform {

  transform(precio: number, cantidad:number): number {
    return precio * cantidad;
  }

}
