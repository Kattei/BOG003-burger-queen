import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';




import { Item } from 'src/app/clases/item';
import { ItemOrder } from 'src/app/clases/itemOrder';



@Component({
  selector: 'app-inc-dec',
  templateUrl: './inc-dec.component.html',
  styleUrls: ['./inc-dec.component.scss']
})
export class IncDecComponent implements OnInit {
//incremento:number = 1
//number:number=0


//@Input()  Item: Item | undefined = new Observable<Item>()
@Input()  Item: Item = new Item();
 pruebaOrden: ItemOrder = new ItemOrder();

 
  //@Input()  name = '';
  @Output() itemSelected = new EventEmitter<ItemOrder>();
  //didVote = false;

  // vote(agreed: boolean) {
  //   this.voted.emit(agreed);
  //   this.didVote = true;
  // }


  constructor() { }

  ngOnInit(): void {
   
  }
contador = (incremento:number) =>{
  if(this.Item !==undefined){

    this.Item.cantidad += incremento
  }
console.log(this.Item);

}


verResumenCompra = () =>{
 this.pruebaOrden.producto = this.Item
  console.log(this.pruebaOrden.producto)
  

  this.itemSelected.emit(this.pruebaOrden)

}
}