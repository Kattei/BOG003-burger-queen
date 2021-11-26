import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/clases/item';
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
  pedidoSubcripcion: Subscription =new Subscription();

  constructor(private recibirInfo:GeneralService) { 
    
  }
  ngOnInit(): void {
    this.pedidoSubcripcion=this.recibirInfo.itemListo$.subscribe((response)=>{
      console.log('look',response);
      if(this.pedido.length === 0 ){
      this.pedido.push(response);
      //this.showItem()
      }else {
        let concidencias = false;
        for (let i = 0; i < this.pedido.length; i++) {
          if(this.pedido[i].nombre == response.nombre){
            this.pedido[i].cantidad=response.cantidad;
            concidencias= true;
                console.log('condicionales',this.pedido);
                break
          }
         
          
        }
        if(!concidencias){
          this.pedido.push(response);
        }
      // this.pedido.forEach((elemento)=>{
      //   if(elemento.nombre==response.nombre){
      //     elemento.cantidad=response.cantidad;
      //     console.log('condicionales',this.pedido);
      //     break
      //   }
      
      // }) 
      }
    });
  
  }
  


  showItem = () =>{  
  this.pedido.forEach(element => {
    // para seleccionar elementos que sean diferentes de cero
    const [nombre, precio, cantidad ]=this.pedido
    console.log('numero',cantidad);

    console.log('elementos', element)
    
  });
  console.log("observando", this.pedido)
  }
}

