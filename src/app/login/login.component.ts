import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
    SocialAuthService,
    FacebookLoginProvider,
    SocialUser,
  } from '@abacritt/angularx-social-login';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    socialUser!: SocialUser;
    isLoggedin?: boolean = undefined;

    
    formularioInicioSesion = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private usuariosServicio: UsuariosService,
        private socialAuthService: SocialAuthService
    ) {
        console.log(this.isLoggedin);
     }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
          });
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = user != null;
          });
      
    }

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
    loginWithFacebook(): void {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData: SocialUser) => {
            console.log(userData);
            // Here, you can handle the user data returned after successful login
          });;
      }
      signOut(): void {
        this.socialAuthService.signOut();
      }
     

}

