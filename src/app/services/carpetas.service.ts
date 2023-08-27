import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folders } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class CarpetasService {

  constructor(private http: HttpClient) { }
  url = 'https://webwizards.eastasia.cloudapp.azure.com';
  // url = 'http://localhost:8888';

  // Obtener hijos de un folder
  obtenerCarpetasHijas(idCarpetaPadre:any): Observable<any> {
    return this.http.get(`${this.url}/carpetas/hijos/${idCarpetaPadre}`);
  }

  // Crear un carpeta
  crearCarpeta(idCarpetaPadre: any, nombreCarpeta: any,idCreador: any): Observable<any> {
    return this.http.post(`${this.url}/carpetas/${idCarpetaPadre}/usuarios/${idCreador}`, nombreCarpeta);
  }
}