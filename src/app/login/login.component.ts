import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UsuariosService } from '../services/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// this.email.setValue('); asignar valor
export class LoginComponent implements OnInit {
  formularioInicioSesion = new FormGroup({
    email:  new FormControl('', [Validators.required]),
    contrasenia:  new FormControl('', [Validators.required])
  })
  
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private usuariosServicio: UsuariosService
) { }
ngOnInit(): void {


} 

  get email(){
    return this.formularioInicioSesion.get('email');
  }

  get contrasenia(){
    return this.formularioInicioSesion.get('contrasenia');
  }

  iniciarSesion(){
  let user  = this.formularioInicioSesion.getRawValue();
 
   
 this.usuariosServicio.logIn(this.formularioInicioSesion.value).subscribe(
  (response : any) => {
   console.log(response);
    if (response.statusCode === 200) {
      this.router.navigate(['/dashboard']);
  } else {
      
      alert(response.message);
  } 
  } , (error: any) => {
    console.log(error);
    alert(error);
}
 )
  
}

    
  }

