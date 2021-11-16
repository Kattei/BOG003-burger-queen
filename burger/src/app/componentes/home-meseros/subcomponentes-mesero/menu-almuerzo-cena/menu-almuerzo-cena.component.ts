import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/clases/item';

@Component({
  selector: 'app-menu-almuerzo-cena',
  templateUrl: './menu-almuerzo-cena.component.html',
  styleUrls: ['./menu-almuerzo-cena.component.scss']
})
export class MenuAlmuerzoCenaComponent implements OnInit {
  items=[];
  almuerzoYcena:Item[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    this.visualizarData()
  }
  
  visualizarData = () => {
    fetch("./assets/menus.json")
    // .then(msg=>msg)
    .then(msg=>{
      return msg.json();
    })
    .then(data=>{
      this.almuerzoYcena=data.almuerzo;
    
      console.log()
    })

    // .then(data=>{
      
    //   // this.desayun=data;
    //   this.desayun=data;
    //   //return this.desayun
    //   // console.log(this.desayun.desayuno[0])
    //   console.log('oka',this.desayun)
    
    // })
    
  }
}


