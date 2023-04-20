import { NgFor } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { DatosService } from '../datos.service';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'iniciar',
  templateUrl: 'iniciar.component.html',
  
  styleUrls: ['iniciar.component.css']
})
export class IniciarComponent {
  title = 'AppViajes';
    usuario:any=""
    pass:any=""
  
 reg=""
  redireccion(){
    this.reg="MiAgenda"
    
    
  }
  constructor(private data:DatosService, private cookie:CookieService){}
 

      
  

 
  get(): void{
    fetch('http://localhost/Proyecto%20Viajes/AppViajes/PHP/mostrar.php')
  .then(response => response.json())
  .then(data => {
    for (let index = 0; index < data.length; index++) {
      const personas = data[index];
      console.log(personas)
      if (this.usuario == data[index].usuario) {
        console.log(data[index].usuario, data[index].token)
        let token=[data[index].token]
        this.data.login(this.usuario, this.pass)
        this.data.uss=data[index].usuario
        this.redireccion()
        break
        
      }else if([index]>data.length){
        alert('usuario no encontrado')
      }
      
    }

          
    }
  
    
  )
 
  }

 
  

}
