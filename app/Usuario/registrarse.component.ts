import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'registro',
  templateUrl: 'registrarse.component.html',
  styleUrls: ['registrarse.component.css']
})
export class RegistroComponent  {
  title = 'AppViajes';
persona={
  nombre:"",
  apellido:"",
  usuario:"",
  password:""
}
confirmar=''
confirmado:number=0
pagina=""

conf(){
  if (this.persona.password == this.confirmar){
    this.confirmado=1
  }else{
    this.confirmado=2
  }
}

 
  constructor(private dataservice:DatosService){}

  registro(){
    this.dataservice.registrar(this.persona)
    console.log(this.persona)
    this.pagina=""

  }

  
  


  

}