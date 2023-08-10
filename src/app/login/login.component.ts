import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// this.email.setValue('); asignar valor
export class LoginComponent {
  formularioInicioSesion = new FormGroup({
    email:  new FormControl('', [Validators.required]),
    contrasenia:  new FormControl('', [Validators.required])
  })
  
  constructor(){}

  get email(){
    return this.formularioInicioSesion.get('email');
  }

  get contrasenia(){
    return this.formularioInicioSesion.get('contrasenia');
  }

  iniciarSesion(){
    console.log(this.formularioInicioSesion.value);
    
  }
}
