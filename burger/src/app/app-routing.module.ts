import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './componentes/prueba/prueba/prueba.component';

const routes: Routes = [
  {path:"prueba", component:PruebaComponent},
  {path:"", redirectTo:"prueba", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
