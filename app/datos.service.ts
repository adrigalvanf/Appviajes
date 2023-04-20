import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private apiUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  private apiKey = 'AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI';
  


  uss=""
  tok:any=""

  constructor(private http: HttpClient, private cookie:CookieService) { }

  searchRestaurantsByCity(city: string) {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant+in+${city}&key=AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI`;
    return this.http.get(url);
  }
  searchHotelByCity(city: string) {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}+hotel&radius=5000&key=AIzaSyD5mbEBXpUaEv2wGCSbKiQu725Cbto3KrI`;
    return this.http.get(url);
  }



  
  url='http://localhost/Proyecto%20Viajes/AppViajes/PHP/enviar.php'

  registrar(persona:any){
    this.http.post(this.url, JSON.stringify(persona)).subscribe()

    alert('Registrado con exito')
  }
  url3='http://localhost/Proyecto%20Viajes/AppViajes/PHP/cargarlista.php'

  cargar_to_do(to_do:any){
    this.http.post(this.url3, JSON.stringify(to_do)).subscribe()

    alert('Registrado con exito')
  }

  url2='http://localhost/Proyecto%20Viajes/AppViajes/PHP/guardardestinos.php'

  nuevodestino(destino:any){
    this.http.post(this.url2, JSON.stringify(destino)).subscribe()
    
  }

  login(username: string, password: string) {
    const body = { username: username, password: password };
    return this.http.post('/login', body).pipe(
      tap((response: any) => {
        const token = response.token; // supongamos que la respuesta de la API contiene un token de sesión
        this.cookie.set('session_token', token);
      })
    );
  }
  
// setToken(token: any) {this.cookie.set('token',token); }
logout() {
  
      this.cookie.delete('session_token');
   
}
  getToken() {
    return this.cookie.get("token");
  }

  salir(token:any){
    this.cookie.delete("token");
  }

  
}
