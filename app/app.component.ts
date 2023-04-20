import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DatosService } from './datos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppViajes';

constructor(private cookie:CookieService, private datos:DatosService) {
  
}

salir(){
  this.datos.logout()
    
  
}






    }