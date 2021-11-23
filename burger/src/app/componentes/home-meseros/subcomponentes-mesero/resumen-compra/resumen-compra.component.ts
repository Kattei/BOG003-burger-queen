import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/clases/item';
import { ItemOrder } from 'src/app/clases/itemOrder';
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

  constructor(private recibirInfo:GeneralService) { }

  ngOnInit(): void {
    this.pedidoSubcripcion=this.recibirInfo.itemListo$.subscribe((response)=>{
      console.log('look',response)
      this.pedido.push(response)
      this.showItem()
    });
  
  }
  


  showItem = () =>{  
  this.pedido.forEach(element => {
    console.log('elementos', element)
    
  });
  console.log("observando", this.pedido)
  }
}
