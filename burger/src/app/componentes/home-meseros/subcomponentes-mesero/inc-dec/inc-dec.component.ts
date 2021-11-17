import { Component, OnInit, Input } from '@angular/core';

import { Item } from 'src/app/clases/item';



@Component({
  selector: 'app-inc-dec',
  templateUrl: './inc-dec.component.html',
  styleUrls: ['./inc-dec.component.scss']
})
export class IncDecComponent implements OnInit {
//incremento:number = 1
//number:number=0

@Input()  itemP: Item | undefined
  constructor() { }

  ngOnInit(): void {
    console.log(this.itemP)
  }
contador = (incremento:number) =>{
  if(this.itemP !==undefined){

    this.itemP.cantidad += incremento
  }
console.log(this.itemP);

}

}
