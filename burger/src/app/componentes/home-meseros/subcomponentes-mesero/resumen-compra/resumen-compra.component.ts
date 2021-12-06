import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/clases/item';
import { MultiplicarPrecioPipe } from 'src/app/pipe/multiplicar-precio.pipe';
//import { ItemOrder } from 'src/app/clases/itemOrder';
import { GeneralService } from '../../../../servicios/general.service';
import { MenuDesayunoComponent } from '../menu-desayuno/menu-desayuno.component';
import { ModalComponent } from '../modal/modal.component';


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

  constructor(private recibirInfo:GeneralService, private matDialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.pedidoSubcripcion = this.recibirInfo.itemListo$.subscribe((response) => {
      this.eliminarItem
      
      
      console.log('look', response);
      if (this.pedido.length === 0 ) {
        this.pedido.push(response);
            this.totalProductos()
            
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
    this.total
  }
  modalResumenCompra(){
    this.matDialog.open(ModalComponent, {data:this.pedido});
    console.log("ver Modal");
  }

}

 
