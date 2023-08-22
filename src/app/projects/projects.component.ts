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
            const carpetaNombre = params['carpetaNombre'];
            if (params['carpetaNombre'] === 'unidad') {
                await this.getUsuarioLoggeado();
            } else {
                await this.getCarpetasHijas(params['carpetaNombre']);
            }
        });

    }

    getUsuarioLoggeado() {
        this.usuariosServicio.obtenerInfoUsuario()
            .subscribe(
                res => {
                    this.usuarioLoggeado = res;
                    if (this.usuarioLoggeado.projectsFolder) {
                        this.getCarpetasHijas(this.usuarioLoggeado.projectsFolder._id);
                    }
                }
            );
    }

    getCarpetasHijas(id: any) {
        
        this.carpetasService.obtenerCarpetasHijas(id)
            .subscribe(
                (response: any) => {
                    
                    if (response.statusCode === 200) {
                        if (response.children.length === 0) {
                            window.history.back();
                            alert("Carpeta vacía");
                        } else {
                            this.content = response.children;
                        }
                        
                    } else {
                        alert(response.message);
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );

    }

    // Función para transformar la respuesta del backend
    //     transformResponse(response: any) {
    //         const transformedData: any = [];

    //         // Recorremos los elementos en children
    //         response.children.forEach((child: any) => {
    //             const newItem = {
    //                 nameFolder: child?.nameFolder,
    //                 children: []
    //             };
    // console.log(child)
    //             // Buscamos elementos relacionados en parent
    //             const relatedParent = response.parent.find((parent: any) => parent._id === child.parent);

    //             if (relatedParent) {
    //                 newItem.nameFolder = relatedParent.nameFolder;
    //             }

    //             transformedData.push(newItem);
    //         });

    //         return transformedData;
    //     }



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
