import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folders } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class CarpetasService {

  constructor(private http: HttpClient) { }

  // Obtener hijos de un folder
  obtenerCarpetasHijas(idCarpetaPadre:any): Observable<any> {
    return this.http.get(`http://localhost:8888/carpetas/hijos/${idCarpetaPadre}`);
  }

  // Crear un carpeta
  crearCarpeta(idCarpetaPadre: any, nombreCarpeta: any): Observable<any> {
    return this.http.post(`http://localhost:8888/carpetas/${idCarpetaPadre}`, nombreCarpeta);
  }
}