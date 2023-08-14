import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  // usuarioLoggeado:Usuario = {};

  registroUsuario(usuario: any):Observable<any>{
    return this.http.post("http://localhost:8888/usuarios",usuario,{
      withCredentials: true
    });
  }

  obtenerInfoUsuario(): Observable<Usuario> {
    return this.http.get("http://localhost:8888/usuarios/autenticado", {
      withCredentials: true
    });
  }

  cerrarSesion(){
    return this.http.post("http://localhost:8888/usuarios/cerrar-sesion",{}, {
      withCredentials: true
    });
  }
}
