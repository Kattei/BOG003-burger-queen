import { Component, OnInit } from '@angular/core';
import { ItemOrder } from 'src/app/clases/itemOrder';


@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.scss']
})
export class ResumenCompraComponent implements OnInit {
pedido: ItemOrder[] = []
  constructor() { }

  ngOnInit(): void {
  
  }

  showItem = (event: any) =>{
console.log("oka", event)
  }
}
