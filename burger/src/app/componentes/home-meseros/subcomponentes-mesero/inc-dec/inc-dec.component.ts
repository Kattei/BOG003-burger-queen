import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-inc-dec',
  templateUrl: './inc-dec.component.html',
  styleUrls: ['./inc-dec.component.scss']
})
export class IncDecComponent implements OnInit {
incremento:number = 1
number:number=0
@Input() itemP: string | undefined
  constructor() { }

  ngOnInit(): void {
    console.log(this.itemP)
  }
contador = (incremento:number) =>{
  this.number += incremento

}

}
