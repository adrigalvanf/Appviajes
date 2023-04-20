import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IniciarComponent } from '../Usuario/iniciar.component';

@Component({
  selector: 'navini',
  templateUrl: 'navini.component.html',
  styleUrls: ['navregi.component.css']
})
export class NaviniComponent implements AfterViewInit {
  title = 'AppViajes';
  
  @ViewChild(IniciarComponent) child: any;

 constructor(){

 }
 usu:string=""
 ngAfterViewInit (){

  this.usu=this.child.usuario

 }


}
