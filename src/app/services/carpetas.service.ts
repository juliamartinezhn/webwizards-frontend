import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folders } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class CarpetasService {

  constructor(private http: HttpClient) { }
  // usuarioLoggeado:Usuario = {};

  obtenerCarpetasHijas(idCarpetaPadre:any): Observable<any> {
    console.log(idCarpetaPadre)
    return this.http.get(`http://localhost:8888/carpetas/hijos/${idCarpetaPadre}`);
  }
}