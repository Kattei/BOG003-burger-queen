import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { map } from 'rxjs/operators';




import { Item } from 'src/app/clases/item';
//import { ItemOrder } from 'src/app/clases/itemOrder';
import { GeneralService } from 'src/app/servicios/general.service';



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
          pruebaOrden: Item = new Item();


  //@Input()  name = '';
  @Output() 
  itemSelected: EventEmitter<Item>= new EventEmitter<Item>();
  //didVote = false;

  // vote(agreed: boolean) {
  //   this.voted.emit(agreed);
  //   this.didVote = true;
  // }


  constructor(private enviarInfo: GeneralService) {
  }

  ngOnInit(): void {

  }
  contador = (incremento: number) => {
    if (this.Item !== undefined) {
      
      this.Item.cantidad += incremento
    
      
    }
    console.log(this.Item);
  }


  verResumenCompra = (() => {
    //  this.pruebaOrden.producto = this.Item
    //   console.log(this.pruebaOrden.producto)
    this.pruebaOrden = this.Item
    // con el metodo emmit se emite al componente padre la variable que se desea pasar de este componente a otro
    // this.itemSelected.emit(this.pruebaOrden)
    let listoBoton = false
    if (this.pruebaOrden.cantidad !== 0) {
      listoBoton=true
      this.enviarInfo.itemListo$.emit(this.pruebaOrden);
    }else{
    

    }
  })
// this.itemSelected.emit(this.pruebaOrden)
// this.enviarInfo.itemListo$.emit(this.pruebaOrden);



}