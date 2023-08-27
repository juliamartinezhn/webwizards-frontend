
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../services/proyectos.service';
import { CarpetasService } from '../services/carpetas.service';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from 'src/models/model';
@Component({
    selector: 'app-reusable-modal',
    templateUrl: './reusable-modal.component.html',
    styleUrls: ['./reusable-modal.component.css']
})
export class ReusableModalComponent implements OnInit {
    ngOnInit(): void {
        this.getUsuarioLoggeado();
    }

    usuarioLoggeado: Usuario = {};
    formulario = new FormGroup({
        text: new FormControl('', [Validators.required])

    })

    @Input() title: string | undefined;
    @Input() idCarpetaPadre: string | undefined;
    @Output() content = new EventEmitter<any>();

    constructor(
        private proyectosServicio: ProyectosService,
        private carpetasService: CarpetasService,
        private usuariosServicio: UsuariosService,

    ) { }



    get text() {
        return this.formulario.get('text');
    }

    cerrarModal(){
        this.formulario.value.text = '';
    }


    guardar() {
        if (this.title == 'Crear proyecto') {
            this.proyectosServicio.crearProyecto(
                this.idCarpetaPadre,
                {
                    nameProject: this.formulario.value.text
                },
                this.usuarioLoggeado._id
            )
                .subscribe(
                    (response: any) => {
                        if (response.statusCode === 200) {
                            this.content.emit(true);
                        } else {
                            alert(response.message);
                        }
                    },
                    (error: any) => {
                        console.log(error);
                    }
                );
        } else if (this.title == 'Crear carpeta') {
            this.carpetasService.crearCarpeta(
                this.idCarpetaPadre,
                {
                    nameFolder: this.formulario.value.text
                },
                this.usuarioLoggeado._id
            )
                .subscribe(
                    (response: any) => {
                        if (response.statusCode === 200) {
                            this.content.emit(true);
                        } else {
                            alert(response.message);
                        }
                    },
                    (error: any) => {
                        console.log(error);
                    }
                );
        }

        this.formulario.value.text = '';

    }

    getUsuarioLoggeado() {
        this.usuariosServicio.obtenerInfoUsuario()
            .subscribe(
                async (res: any) => {
                    this.usuarioLoggeado = res;

                }
            );
    }


}
