import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Folders } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  // Crear un proyecto
  crearProyecto(idCarpetaPadre: any, nombreCarpeta: any): Observable<any> {
    return this.http.post(`http://localhost:8888/proyectos/carpetas/${idCarpetaPadre}`, nombreCarpeta);
  }

  // Obtener un proyecto
  obtenerInfoProyecto(idProyecto: any): Observable<any> {
    return this.http.get(`http://localhost:8888/proyectos/${idProyecto}`);
  }

  // Guardar(Actualizar) un proyecto
  guardarProyecto(idProyecto: any, proyectoModificado: any): Observable<any> {
    return this.http.post(`http://localhost:8888/proyectos/${idProyecto}`, proyectoModificado);
  }
}