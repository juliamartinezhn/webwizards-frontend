import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    formularioInicioSesion = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

    constructor(
        private router: Router,
        private usuariosServicio: UsuariosService
    ) { }

    get email() {
        return this.formularioInicioSesion.get('email');
    }

    get password() {
        return this.formularioInicioSesion.get('password');
    }

    iniciarSesion() {


        this.usuariosServicio.logIn(this.formularioInicioSesion.value).subscribe(
            (response: any) => {
                console.log(response);
                if (response.statusCode === 200) {
                    this.router.navigate(['/dashboard']);
                } else {

                    alert(response.message);
                }
            }, (error: any) => {
                console.log(error);
                alert(error);
            }
        )

    }


}

