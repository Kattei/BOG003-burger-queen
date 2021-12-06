import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/clases/item';
import { GeneralService } from '../../../../servicios/general.service';


@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.scss']
})
export class ResumenCompraComponent implements OnInit {
  // @Input()
  pedido: Item[]=[];
  sumaTotal:number[]=[];
  total:number=0
  pedidoSubcripcion: Subscription =new Subscription();
  bottonCerrar:boolean=false;

  constructor(private recibirInfo:GeneralService) { 
    
  }

  ngOnInit(): void {
    this.pedidoSubcripcion = this.recibirInfo.itemListo$.subscribe((response) => {
       const totalProductos = ()=>{
         
         this.sumaTotal=[];
           this.pedido.forEach(element => {
             this.sumaTotal.push(element.cantidad * element.precio);
             const reducer = (accumulator: number, curr: number) => accumulator + curr;
             console.log('sumatotal',this.sumaTotal)
             this.total = this.sumaTotal.reduce(reducer);
           
           });
       }

      console.log('look', response);
      if (this.pedido.length === 0 ) {
        this.pedido.push(response);
            totalProductos()
        
      } else {
        let concidencias = false;
        for (let i = 0; i < this.pedido.length; i++) {
          if (this.pedido[i].nombre == response.nombre ) {
            this.pedido[i].cantidad = response.cantidad;
            concidencias = true;
            
            console.log('condicionales', this.pedido);
            break
          }
        }
        
        if (!concidencias) {
          this.pedido.push(response);
        }

        this.pedido.forEach((element)=>{
          if(element.cantidad === 0){
            const posicionIndex =this.pedido.indexOf(element)
            this.pedido.splice(posicionIndex, 1)
            console.log("borrar",this.pedido) 
          }
        })
        
        
        this.totalProductos();
        
        
      }
    }
    
    
    
    );
    
  }
  onChangeClass(){

  }

  totalProductos = () => {
    this.sumaTotal = [];//crea el array acumulador
    this.pedido.forEach(element => { //se realiza este metodo para recorrer el array de pedido
      this.sumaTotal.push(element.cantidad * element.precio);// se le asigna al el array vacio suma total los valores de la multipliacacion de cantidad con precio de cada elemento
      const reducer = (accumulator: number, curr: number) => accumulator + curr;// funcion arrow para sumar el valor anterior con el valor actual
      console.log('sumatotal', this.sumaTotal)
      this.total = this.sumaTotal.reduce(reducer); //metodo(callback) que recibe a la funcion reducer y restorna el valor del acumulador (number)
      if(this.sumaTotal==[]){
      this.total=0;}
      console.log('sumatotal',this.total);
    });
  }
  
  // funcion eliminar todo un item de compra
  eliminarItem=(e:Item)=>{
    let newArray = this.pedido.filter(element=>element.nombre !== e.nombre)
    this.pedido=newArray;
    this.totalProductos();
    console.log(this.pedido);
  } 
  // eliminar todo el contenido de resumen compra 
  
  eliminarPedido=()=>{
    this.bottonCerrar=!this.bottonCerrar;
    this.pedido=[]    
    this.totalProductos();
  }
}


