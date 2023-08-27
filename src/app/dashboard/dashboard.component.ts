import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { ProyectosService } from '../services/proyectos.service';
import { Folders, Projects, Usuario } from 'src/models/model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    usuarioLoggeado: Usuario = {};
    content: Array<Folders | Projects> = [];
    constructor(
        private usuariosServicio: UsuariosService,
        private proyectosService: ProyectosService
    ) { }
    ngOnInit(): void {
        this.getUsuarioLoggeado();

    }

    getUsuarioLoggeado() {
        this.usuariosServicio.obtenerInfoUsuario()
            .subscribe(
                res => {
                    this.usuarioLoggeado = res;
                    this.getUltimosProyectos(res._id);
                    // console.log(res);

                }
            );
    }

    getUltimosProyectos(id: any) {

        this.proyectosService.obtenerUltimosProyectos(id)
            .subscribe(
                async (response: any) => {
                    this.content = await response.proyectos;

                },
                (error: any) => {
                    console.log(error);
                }
            );

    }



}
