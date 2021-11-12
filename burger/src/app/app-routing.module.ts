import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeChefComponent } from './componentes/home-chef/home-chef.component';
import { HomeMeserosComponent } from './componentes/home-meseros/home-meseros.component';
import { LoginUserComponent } from './componentes/login-user/login-user.component';
//import { PruebaComponent } from './componentes/prueba/prueba/prueba.component';
import { RegisterComponent } from './componentes/register/register.component';
import { StatusPedidosComponent } from './componentes/status-pedidos/status-pedidos.component';

const routes: Routes = [
  {path:"", redirectTo:"login-user", pathMatch:"full" },
  //{path:"", redirectTo:"login", pathMatch:"full" },
 //{path:"prueba", component:PruebaComponent},
  //{path:"login", component:Login
  {path:"register", component:RegisterComponent},
  {path:"home-meseros", component:HomeMeserosComponent},
  {path:"home-chef", component:HomeChefComponent},
  {path:"status-pedidos", component:StatusPedidosComponent},
  {path:"login-user", component:LoginUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
