import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folders } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8888';

  // Crear un proyecto
  crearProyecto(idCarpetaPadre: any, nombreProyecto: any, idCreador: any): Observable<any> {
    return this.http.post(`${this.url}/proyectos/carpetas/${idCarpetaPadre}/usuarios/${idCreador}`, nombreProyecto);
  }

  // Obtener un proyecto
  obtenerInfoProyecto(idProyecto: any): Observable<any> {
    return this.http.get(`${this.url}/proyectos/${idProyecto}`);
  }

  // Guardar(Actualizar) un proyecto
  guardarProyecto(idProyecto: any, proyectoModificado: any): Observable<any> {
    return this.http.post(`${this.url}/proyectos/${idProyecto}`, proyectoModificado);
  }

  // Obtener las colaboraciones de un usuario
  obtenerColaboracionesDeUsuario(idUsuario: any): Observable<any> {
    return this.http.get(`${this.url}/proyectos/usuarios/${idUsuario}`);
  }
}