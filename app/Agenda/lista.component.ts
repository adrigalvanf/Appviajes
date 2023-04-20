import { Component } from "@angular/core";

@Component({
    selector: 'lista',
    templateUrl: 'lista.component.html',
    styleUrls: []
  })
  export class ListaComponent {
    title = 'AppViajes';

     
    mas(){
        document.getElementById('lista')?.insertAdjacentHTML('beforeend','<li><input type="text"></li>')
       
        
         
       }

}