import { Component } from "@angular/core";
import { DatosService } from "../datos.service";


@Component({
    selector: 'mis-viajes',
    templateUrl: 'misviajes.component.html',
    styleUrls: ['misviajes.component.css']
  })
  export class MisViajesComponent {
    title = 'AppViajes';
  
  constructor(private datos:DatosService) {
    
  }
  usuario=this.datos.uss
  ciudad:any[]=[];
  TOLIST={
    destino:"",
    input:"",
    input1:"",
    input2:"",
    input3:""

  }
  inputvalor=""
 
  idi:string []=[]
  mo=0
  td=1
  vpv=1
  ocultarmenu(){
    this.vpv=0
  }


  addToMyArray(value:any) {
    fetch('http://localhost/Proyecto%20Viajes/AppViajes/PHP/mostrardestinos.php')
  .then(response => response.json())
  .then(data => {
    for (let index = 0; index < data.length; index++) {
      if (this.usuario == data[index].usuario) {
        console.log(data[index].to_do)
        if(data[index].to_do.length == 0){
          this.TOLIST.input=value
        }else{
          this.TOLIST.input=data[index].to_do
          this.TOLIST.input1=value
        }
        
      }else if(index==data.length){
        
        break
      }
    }})
    
  }
  obtenerId(evento: MouseEvent) {
    const id = (evento.target as Element).id; 
    this.TOLIST.destino= id;
    this.datos.cargar_to_do(this.TOLIST)
  }


  complete(evento: MouseEvent){
    const id = (evento.target as Element).id
          const pe=document.getElementById(id)
          if (pe==null) {
            
          }else{
            pe.style.display="none"
          }

        }
          

  get(): void{
    fetch('http://localhost/Proyecto%20Viajes/AppViajes/PHP/mostrardestinos.php')
  .then(response => response.json())
  .then(data => {
    for (let index = 0; index < data.length; index++) {
      if (this.usuario == data[index].usuario) {
        console.log(data[index])
        this.ciudad.push([data[index].destino, data[index].entrada, data[index].salida, data[index].hospedaje, data[index].comentarios, data[index].to_do])
        console.log(this.ciudad)
        this.mo=1

      }else if(index==data.length){
        
        break
      }
      

    
    }})
  
    
  }
}