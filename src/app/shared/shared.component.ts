import { Component } from '@angular/core';
import { Folders, Projects } from 'src/models/model';
import { UsuariosService } from '../services/usuarios.service';
import { CarpetasService } from '../services/carpetas.service';
import { ProyectosService } from '../services/proyectos.service';
import { Usuario } from 'src/models/model';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.css']
})
export class SharedComponent {

    usuarioLoggeado: Usuario = {};
    content: Array<Folders | Projects> = [];
    navigationHistory: string = '';
    carpetaActual: any = '';
    constructor(
        private route: ActivatedRoute,
        private usuariosServicio: UsuariosService,
        private proyectosService: ProyectosService,
        private carpetasService: CarpetasService,

    ) { }

    async ngOnInit() {

        this.route.params.subscribe(async params => {
            this.navigationHistory = params['carpetaNombre'];
            
            if (this.navigationHistory === 'central') {
                await this.getUsuarioLoggeado();

            } else {
                this.carpetaActual = this.navigationHistory;
                await this.getCarpetasHijas(this.navigationHistory);
            }
        });

    }
    getCarpetasHijas(id: any) {

        this.carpetasService.obtenerCarpetasHijas(id)
            .subscribe(
                async (response: any) => {

                    if (response.statusCode === 200) {
                        this.content = await response.children;
                    } else {
                        alert(response.message);
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );

    }

    getUsuarioLoggeado() {
        this.usuariosServicio.obtenerInfoUsuario()
            .subscribe(
                async (res: any) => {
                    this.usuarioLoggeado = res;
                    this.getColaboraciones(res._id);

                }
            );
    }

    getColaboraciones(id: any) {

        this.proyectosService.obtenerColaboracionesDeUsuario(id)
            .subscribe(
                async (response: any) => {
                    this.content = await response.colaboraciones;

                },
                (error: any) => {
                    console.log(error);
                }
            );

    }

    goBack() {
        window.history.back();
    }

}
