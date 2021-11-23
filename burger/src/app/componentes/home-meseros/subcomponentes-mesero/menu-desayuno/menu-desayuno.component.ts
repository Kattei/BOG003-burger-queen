import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/clases/item';
import { ItemOrder } from '../../../../clases/itemOrder';



@Component({
  selector: 'app-menu-desayuno',
  templateUrl: './menu-desayuno.component.html',
  styleUrls: ['./menu-desayuno.component.scss']
})
export class MenuDesayunoComponent implements OnInit {
  items=[];
  desayunoPrueba:any = [];


  showItem: Item[];
  
  
  
  constructor() { 
    this.showItem=[]
  }
  
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
      this.desayunoPrueba=data.desayuno;
      console.log(this.desayunoPrueba)
    })

    // .then(data=>{
      
    //   // this.desayun=data;
    //   this.desayun=data;
    //   //return this.desayun
    //   // console.log(this.desayun.desayuno[0])
    //   console.log('oka',this.desayun)
    
    // })
    
  }
  muestraResumen(event:any){
    this.showItem.push(event);

  }
}
