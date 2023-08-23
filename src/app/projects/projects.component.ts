import { Component } from '@angular/core';
import { Folders, Projects } from 'src/models/model';
import { UsuariosService } from '../services/usuarios.service';
import { CarpetasService } from '../services/carpetas.service';
import { Usuario } from 'src/models/model';
import { ActivatedRoute } from '@angular/router';

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
    constructor(
        private route: ActivatedRoute,
        private usuariosServicio: UsuariosService,
        private carpetasService: CarpetasService
    ) {

    }

    async ngOnInit() {
        this.route.params.subscribe(async params => {
            
            
            if (params['carpetaNombre'] === 'unidad') {
                await this.getUsuarioLoggeado();
                
            } else {
                this.carpetaActual = params['carpetaNombre'];
                await this.getCarpetasHijas(params['carpetaNombre']);
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

    openModal(title: string) {
        this.title = title;
    }

    closeModal() {
        this.isModalOpen = false;
    }

  
    /**
     * 
     * [
      {
        nameFolder: 'Unidad Proyectos',
        children: [
          {
            _id: '64e04f2326e846ade227e0c3',
            nameFolder: 'Folder hijo ',
            parent: '64e04ed826e846ade227e0b8',
            __v: 0
          }
        ]
      }
    ]
     */


    // content: Array<Folders | Projects> = [
    //     {
    //         nameFolder: "ProyectoDW",
    //         children: [
    //             {
    //                 nameProject: "Login"
    //             },
    //             {
    //                 nameProject: "Registro"
    //             },
    //             {
    //                 nameProject: "Home"
    //             },
    //             {
    //                 nameFolder: "ProyectoOtro",
    //                 children: [
    //                     {
    //                         nameProject: "LoginOtros"
    //                     },
    //                     {
    //                         nameProject: "RegistroOtros"
    //                     },
    //                     {
    //                         nameProject: "HomeOtros"
    //                     },
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         nameFolder: "Proyecto POO",
    //         children: [
    //             {
    //                 nameProject: "Sign Up"
    //             }
    //         ]
    //     },
    //     {
    //         nameProject: "Appstore"
    //     },
    //     {
    //         nameProject: "Pokedex"
    //     }
    // ];

}
