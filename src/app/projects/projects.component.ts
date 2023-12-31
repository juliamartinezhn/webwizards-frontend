import { Component } from '@angular/core';
import { Folders, Projects } from 'src/models/model';
import { UsuariosService } from '../services/usuarios.service';
import { CarpetasService } from '../services/carpetas.service';
import { Usuario } from 'src/models/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    isModalOpen = false;
    title = '';
    carpetaActual: any = '';
    usuarioLoggeado: Usuario = {};
    content: Array<Folders | Projects> = [];
    navigationHistory: string = '';
    constructor(
        private route: ActivatedRoute,
        private usuariosServicio: UsuariosService,
        private carpetasService: CarpetasService,
        private router: Router,
    ) {}

    async ngOnInit() {
        this.route.params.subscribe(async params => {
            this.navigationHistory = params['carpetaNombre'];
            
            if (this.navigationHistory === 'unidad') {
                await this.getUsuarioLoggeado();
                
            } else {
                this.carpetaActual = this.navigationHistory;
                await this.getCarpetasHijas(this.navigationHistory);
            }
        });

    }

    getUsuarioLoggeado() {
        this.usuariosServicio.obtenerInfoUsuario()
            .subscribe (
                async(res:any) => {
                    this.usuarioLoggeado = res;
                    
                    if (this.usuarioLoggeado.projectsFolder) {
                        this.getCarpetasHijas(this.usuarioLoggeado.projectsFolder._id);
                        this.carpetaActual =  await res.projectsFolder?._id;
                        
                    }
                }
            );
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

    async actualizarContent(content: any) {
        await this.getCarpetasHijas(this.carpetaActual);

    }

    goBack() {
        window.history.back();
      }

    openModal(title: string) {
        this.title = title;
    }

    closeModal() {
        this.isModalOpen = false;
    }

  

}
