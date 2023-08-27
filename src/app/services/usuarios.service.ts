import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

 // url = 'https://webwizards.eastasia.cloudapp.azure.com';
 url = 'http://localhost:8888';

  registroUsuario(usuario: any):Observable<any>{
    return this.http.post(`${this.url}/usuarios`,usuario,{
      withCredentials: true
    });
  }

  obtenerInfoUsuario(): Observable<Usuario> {
    return this.http.get(`${this.url}/usuarios/autenticado`, {
      withCredentials: true
    });
  }

  cerrarSesion(){
    return this.http.post(`${this.url}/usuarios/cerrar-sesion`,{}, {
      withCredentials: true
    });
  }
  logIn(usuario: any) :Observable<any> {
    return this.http.post(`${this.url}/usuarios/login`,usuario,{
      withCredentials: true
    });
  }
  

  cambiarPlan(usuarioId : any,plan :any){
    return this.http.post(`${this.url}/usuarios/${usuarioId}`,plan,
      
    );
  }

}

