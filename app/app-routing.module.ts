import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './Agenda/agenda.component';
import { AppComponent } from './app.component';

import { InicioComponent } from './Inicio/inicio.component';
import { IniciarComponent } from './Usuario/iniciar.component';
import { RegistroComponent } from './Usuario/registrarse.component';

const routes: Routes = [
  
  {path:'',component:InicioComponent},
  {path:'MiAgenda',component:AgendaComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
