import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PruebaComponent } from './componentes/prueba/prueba/prueba.component';
//import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HomeMeserosComponent } from './componentes/home-meseros/home-meseros.component';
import { HomeChefComponent } from './componentes/home-chef/home-chef.component';
import { StatusPedidosComponent } from './componentes/status-pedidos/status-pedidos.component';
import { LoginUserComponent } from './componentes/login-user/login-user.component';
import { MenuDesayunoComponent } from './componentes/home-meseros/subcomponentes-mesero/menu-desayuno/menu-desayuno.component';
import { MenuAlmuerzoCenaComponent } from './componentes/home-meseros/subcomponentes-mesero/menu-almuerzo-cena/menu-almuerzo-cena.component';
import { ResumenCompraComponent } from './componentes/home-meseros/subcomponentes-mesero/resumen-compra/resumen-compra.component';
import { IncDecComponent } from './componentes/home-meseros/subcomponentes-mesero/inc-dec/inc-dec.component';


@NgModule({
  declarations: [
    AppComponent,
    //PruebaComponent,
    //LoginComponent,
    RegisterComponent,
    HomeMeserosComponent,
    HomeChefComponent,
    StatusPedidosComponent,
    LoginUserComponent,
    MenuDesayunoComponent,
    MenuAlmuerzoCenaComponent,
    ResumenCompraComponent,
    IncDecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
