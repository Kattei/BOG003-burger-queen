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
    // this.showItem();
    this.pedidoSubcripcion = this.recibirInfo.itemListo$.subscribe((response) => {
      console.log('look', response);
      if (this.pedido.length === 0) {
        this.pedido.push(response);

        //this.showItem()
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
        // this.pedido.forEach(element => {
        // console.log('suma total', this.sumaTotal.reduce(reducer));

        // });

        if (!concidencias) {
          this.pedido.push(response);
        }
        
        this.pedido.forEach(element => {
          this.sumaTotal.push(element.cantidad * element.precio);
          const reducer = (accumulator: number, curr: number) => accumulator + curr;
          this.total = this.sumaTotal.reduce(reducer);
        });

        // this.pedido.forEach((elemento)=>{
        //   if(elemento.nombre==response.nombre){
        //     elemento.cantidad=response.cantidad;
        //     console.log('condicionales',this.pedido);
        //     break
        //   }

        // }) 

        // console.log('pipe', new MultiplicarPrecioPipe())
      }
    }

  );

  }}
  


  // showItem = () =>{  
    
//   this.pedido.forEach(element => {
//     // para seleccionar elementos que sean diferentes de cero
//     const [nombre, precio, cantidad ]=this.pedido
//     console.log('numero',cantidad);

//     console.log('elementos', element)
    
//   });
//   console.log("observando", this.pedido)
//   }
  