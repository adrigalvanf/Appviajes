import { Component, Input } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'agenda',
  templateUrl: 'agenda.component.html',
  styleUrls: ['agenda.component.css']
})
export class AgendaComponent {
  title = 'AppViajes';
  today: number = Date.now();
  
  
  nuevo= 0;
  constructor(private datos:DatosService) {}

  usuario=this.datos.uss

  Destino={
    usuario:this.usuario,
    destino:"",
    entrada:"",
    salida:"" ,
    hospedaje:"",
    comentarios:""

  }
  

  guardar(){
    
    console.log(this.Destino)
    this.datos.nuevodestino(this.Destino)
  }
  
   b=0
   rest(){
    if(this.b==0){
      this.b=1
    
    }else{
      this.b=0
    }
   } 

  abrir(){
    if(this.nuevo==0){
      this.nuevo=1
      console.log(this.today)

    }else{
      this.nuevo=0
    }
  }

  m=0
  abrir2(){
    if(this.m==0){
      this.m=1

    }else{
      this.m=0
    }
  }


  }
  
  
