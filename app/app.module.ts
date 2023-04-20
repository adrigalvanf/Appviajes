import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Inicio/inicio.component';
import { RegistroComponent } from './Usuario/registrarse.component';
import {HttpClientModule} from '@angular/common/http';
import { DatosService } from './datos.service';
import { IniciarComponent } from './Usuario/iniciar.component';
import { NavregiComponent } from './Inicio/navregi.component';
import { NaviniComponent } from './Inicio/navinicomponent';
import { AgendaComponent } from './Agenda/agenda.component';
import { CookieService } from 'ngx-cookie-service';
import { MisViajesComponent } from './Agenda/misviajes.component';
import { ListaComponent } from './Agenda/lista.component';
import { InfoComponent } from './Agenda/info.component';

@NgModule({
  declarations: [
    AppComponent, InicioComponent, RegistroComponent, IniciarComponent,NavregiComponent,NaviniComponent,AgendaComponent,MisViajesComponent, ListaComponent, InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatosService, CookieService],
  bootstrap: [AppComponent, InicioComponent, RegistroComponent, IniciarComponent,NavregiComponent,NaviniComponent,AgendaComponent,MisViajesComponent,ListaComponent, InfoComponent]
})
export class AppModule { }
