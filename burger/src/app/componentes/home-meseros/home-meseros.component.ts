import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-meseros',
  templateUrl: './home-meseros.component.html',
  styleUrls: ['./home-meseros.component.scss']
})
export class HomeMeserosComponent implements OnInit {
  showBreakfast:boolean =false;

  constructor() { }

  ngOnInit(): void {
  }


  getMenuDesayuno():void{

    const mensaje="holi que se dice";
    this.showBreakfast =!this.showBreakfast;
  }

}
