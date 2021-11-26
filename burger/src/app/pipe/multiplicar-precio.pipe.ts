import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicarPrecio'
})
export class MultiplicarPrecioPipe implements PipeTransform {

  transform(value: number, quantity:number): unknown {
    return value* quantity;
  }

}
