import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-almuerzo-cena',
  templateUrl: './menu-almuerzo-cena.component.html',
  styleUrls: ['./menu-almuerzo-cena.component.scss']
})
export class MenuAlmuerzoCenaComponent implements OnInit {
  items=[];
  almuerzoYcena:any = [];
  visualizarData = () => {
    fetch("./assets/menus.json")
    // .then(msg=>msg)
    .then(msg=>{
      return msg.json();
    })
    .then(data=>{
      this.almuerzoYcena=data.almuerzo;
      console.log(this.almuerzoYcena)
    })

    // .then(data=>{
      
    //   // this.desayun=data;
    //   this.desayun=data;
    //   //return this.desayun
    //   // console.log(this.desayun.desayuno[0])
    //   console.log('oka',this.desayun)
    
    // })
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}


