import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/clases/item';
import { MultiplicarPrecioPipe } from 'src/app/pipe/multiplicar-precio.pipe';
//import { ItemOrder } from 'src/app/clases/itemOrder';
import { GeneralService } from '../../../../servicios/general.service';


@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.scss']
})
export class ResumenCompraComponent implements OnInit {
  // @Input()
  pedido: Item[]=[];
  sumaTotal:number[]=[];
  total:number=0
  pedidoSubcripcion: Subscription =new Subscription();

  constructor(private recibirInfo:GeneralService) { 
    
  }
  ngOnInit(): void {
    
    this.pedidoSubcripcion = this.recibirInfo.itemListo$.subscribe((response) => {
      console.log('look', response);
      if (this.pedido.length === 0) {
        this.pedido.push(response);

        
      } else {
        let concidencias = false;
        for (let i = 0; i < this.pedido.length; i++) {
          if (this.pedido[i].nombre == response.nombre) {
            this.pedido[i].cantidad = response.cantidad;
            
            concidencias = true;
            
            console.log('condicionales', this.pedido);
            break
          }
        }

        if (!concidencias) {
          this.pedido.push(response);
        }
        
       // this.pedido.forEach(element => {
         this.sumaTotal.push(response.cantidad * response.precio);

         const reducer = (accumulator: number, curr: number) => accumulator + curr;
         this.total = this.sumaTotal.reduce(reducer);
         
        //});

    
      }
    }

  );

  }}