import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    formularioRegistro = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]),
        password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()\-_=+{};:,<.>])(?!.*\s).{8,}$/)]),
        plan: new FormControl('Gratis'),
        fechaNacimiento: new FormControl('', [Validators.required])

    });

    constructor(
        private http: HttpClient,
        private router: Router,
        private usuariosServicio: UsuariosService
    ) { }
    ngOnInit(): void {


    }
    get nombre() {
        return this.formularioRegistro.get('nombre');
    }
    get apellido() {
        return this.formularioRegistro.get('apellido');
    }
    get email() {
        return this.formularioRegistro.get('email');
    }
    get password() {
        return this.formularioRegistro.get('password');
    }

    get fechaNacimiento() {
        return this.formularioRegistro.get('fechaNacimiento');
    }
    registrarse() {
        
        this.usuariosServicio.registroUsuario(this.formularioRegistro.value)
            .subscribe(
                (response: any) => {
                    if (response.statusCode === 200) {
                        this.router.navigate(['/dashboard']);
                    } else {
                        
                        alert(response.message);
                    }
                },
                (error: any) => {
                    console.log(error);
                    alert(error);
                }
            );
    }


}
