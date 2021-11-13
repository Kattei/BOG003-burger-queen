import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu-desayuno',
  templateUrl: './menu-desayuno.component.html',
  styleUrls: ['./menu-desayuno.component.scss']
})
export class MenuDesayunoComponent implements OnInit {
  items=[];
  desayunoPrueba:any = [];
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
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
