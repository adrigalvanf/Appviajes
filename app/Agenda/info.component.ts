import { Component } from "@angular/core";
import { DatosService } from "../datos.service";

@Component({
    selector: 'info',
    templateUrl: 'info.component.html',
    styleUrls: ['info.component.css']
  })
  export class InfoComponent {
    title = 'AppViajes';
    constructor(private datos:DatosService){}
    city=""
    cityh=""

    buscarcity(){
        this.datos.searchRestaurantsByCity(this.city).subscribe((response: any) => {
          console.log(response.results[0]);
          let photo1=response.results[0].photos[0].photo_reference
          let name1= response.results[0].name
          let puntuacion1 = response.results[0].rating
          let url1= `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo1}&key=AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI`
          document.getElementById('boton')?.insertAdjacentHTML('afterend',`<img src=${url1}  height="300px"> <p>${name1}, puntuacion: ${puntuacion1}</p>`)
          let photo2=response.results[1].photos[0].photo_reference
          let name2= response.results[1].name
          let puntuacion2 = response.results[1].rating
          let url2= `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo2}&key=AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI`
          document.getElementById('boton2')?.insertAdjacentHTML('afterend',`<img src=${url2}  height="300px"> <p>${name2}, puntuacion: ${puntuacion2}</p>`)
        })
      }

      buscarhotel(){
        this.datos.searchHotelByCity(this.cityh).subscribe((response:any)=>{
            console.log(response.results[0])
            let photo1=response.results[0].photos[0].photo_reference
          let name1= response.results[0].name
          let puntuacion1 = response.results[0].rating
          let url1= `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo1}&key=AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI`
          document.getElementById('hotel')?.insertAdjacentHTML('afterend',`<img src=${url1} height="300px"> <p>${name1}, puntuacion: ${puntuacion1}</p>`)
          let photo2=response.results[1].photos[0].photo_reference
          let name2= response.results[1].name
          let puntuacion2 = response.results[1].rating
          let url2= `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo2}&key=AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI`
          document.getElementById('hotel2')?.insertAdjacentHTML('afterend',`<img src=${url2} height="300px"> <p>${name2}, puntuacion: ${puntuacion2}</p>`)
          let photo3=response.results[2].photos[0].photo_reference
          let name3= response.results[2].name
          let puntuacion3 = response.results[2].rating
          let url3= `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo3}&key=AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI`
          document.getElementById('hotel3')?.insertAdjacentHTML('afterend',`<img src=${url3}  height="300px"> <p>${name3}, puntuacion: ${puntuacion3}</p>`)
        })

      }
  }
  