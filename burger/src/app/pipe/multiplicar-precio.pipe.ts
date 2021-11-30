import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicarPrecio'
})
export class MultiplicarPrecioPipe implements PipeTransform {

  transform(precio: number, cantidad:number): number {
    //
    let mutiplicacion = precio*cantidad;
    //let acumuadorPrecio += mutiplicacion;

    return mutiplicacion;
  }


}
