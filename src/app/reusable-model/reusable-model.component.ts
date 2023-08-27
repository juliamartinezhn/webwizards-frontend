import { Component, Input, OnInit } from '@angular/core';
import { ContentItem, Folders, Projects, Usuario } from 'src/models/model';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CarpetasService } from '../services/carpetas.service';
import { ProyectosService } from '../services/proyectos.service';
import { DatePipe } from '@angular/common';
import { UsuariosService } from '../services/usuarios.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
    selector: 'app-reusable-model',
    templateUrl: './reusable-model.component.html',
    styleUrls: ['./reusable-model.component.css']
})
export class ReusableModelComponent implements OnInit{
    
    @Input() content: Array<ContentItem> = [];
    @Input() type: string = '';
    proyectoActual:Projects={};
    usuarioLoggeado: Usuario = {};
    formularioColaborador = new FormGroup({
        collabEmail: new FormControl('', [Validators.required])
    })
    
    constructor(
        private carpetasService: CarpetasService,
        private proyectosService : ProyectosService,
        private router: Router,
        private route: ActivatedRoute,
        private datePipe: DatePipe,
        private usuariosServicio: UsuariosService,
    ) { }
    ngOnInit(): void {
        this.getUsuarioLoggeado();
    }

    get collabEmail() {
        return this.formularioColaborador.get('collabEmail');
    }

    getUsuarioLoggeado() {
        this.usuariosServicio.obtenerInfoUsuario()
            .subscribe(
                res => {
                    this.usuarioLoggeado = res;
                }
            );
    }


    activate(item: any) {
        if (item.nameFolder) {
            
            this.router.navigate(['/proyectos/', item._id]);
        }else if(item.nameProject){
            this.getProjectInfo(item._id);
            
            
        }

    }

    anadirColaborador() {
        this.proyectosService.anadirColaboradorProyecto(
            this.proyectoActual._id, 
            this.formularioColaborador.value.collabEmail
            )
            .subscribe(
                (response: any) => {
                    alert(response.message);
                },
                (error: any) => {
                    console.log(error);
                }
            );

        this.formularioColaborador.value.collabEmail = '';


    }
    cerrarModal(){
        this.formularioColaborador.value.collabEmail = '';
    }

    goToEditor(item: any) {
        this.router.navigate(['/editor/', item._id]);
    }
   


    getCarpetasHijas(id: any) {

        let children;
        
        this.carpetasService.obtenerCarpetasHijas(id)
            .subscribe(
                (response: any) => {
                    if (response.statusCode === 200) {
                        children = response.children;
                        return children;
                    } else {

                        alert(response.message);
                        return;
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    getProjectInfo(id: any) {

        
        this.proyectosService.obtenerInfoProyecto(id)
            .subscribe(
                (response: any) => {
                    if (response.statusCode === 200) {
                        // children = response.children;
                        // return children;
                        this.proyectoActual = response.project;
                        console.log(response)
                    } else {

                        alert(response.message);
                        return;
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );


    }

}
