
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../services/proyectos.service';
import { CarpetasService } from '../services/carpetas.service';

@Component({
    selector: 'app-reusable-modal',
    templateUrl: './reusable-modal.component.html',
    styleUrls: ['./reusable-modal.component.css']
})
export class ReusableModalComponent {


    formulario = new FormGroup({
        text: new FormControl('', [Validators.required])

    })

    @Input() title: string | undefined;
    @Input() idCarpetaPadre: string | undefined;
    @Output() content = new EventEmitter<any>();

    constructor(
        private proyectosServicio: ProyectosService,
        private carpetasService: CarpetasService

    ) { }


    get text() {
        return this.formulario.get('text');
    }


    guardar() {
        console.log(this.formulario.value.text);
        if(this.title=='Crear proyecto'){
            this.proyectosServicio.crearProyecto(this.idCarpetaPadre, 
                {
                    nameProject: this.formulario.value.text
                })
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
        }else if(this.title=='Crear carpeta'){
            this.carpetasService.crearCarpeta(this.idCarpetaPadre, 
                {
                    nameFolder: this.formulario.value.text
                })
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

        

    }


}
