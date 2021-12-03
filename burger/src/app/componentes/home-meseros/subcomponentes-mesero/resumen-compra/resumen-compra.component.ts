import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/clases/item';
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
       const totalProductos = ()=>{
         
         this.sumaTotal=[];
           this.pedido.forEach(element => {
             this.sumaTotal.push(element.cantidad * element.precio);
             const reducer = (accumulator: number, curr: number) => accumulator + curr;
             console.log('sumatotal',this.sumaTotal)
             this.total = this.sumaTotal.reduce(reducer);
           
           });
       }

      console.log('look', response);
      if (this.pedido.length === 0 ) {
        this.pedido.push(response);
            totalProductos()
        
      } else {
        let concidencias = false;
        for (let i = 0; i < this.pedido.length; i++) {
          if (this.pedido[i].nombre == response.nombre ) {
            this.pedido[i].cantidad = response.cantidad;
            concidencias = true;
            
            console.log('condicionales', this.pedido);
            break
          }
        }
       

        if (!concidencias) {
          this.pedido.push(response);
        }

        this.pedido.forEach((element)=>{
          if(element.cantidad === 0){
            const posicionIndex =this.pedido.indexOf(element)
            this.pedido.splice(posicionIndex, 1)
           console.log("borrar",this.pedido) 
          }
        })

        
       totalProductos()
        

      }

    }
    
    );
    
  }
   
}
  


 
  