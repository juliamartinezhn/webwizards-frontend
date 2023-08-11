import { Component,OnInit  } from '@angular/core';
import { FormControl , FormGroup,Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formularioRegistro = new FormGroup({
    nombre:new FormControl('', [Validators.required,Validators.maxLength(10)]),
    apellido:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email: new FormControl ('',[Validators.required, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]),
    fechaNacimiento:new FormControl('',[Validators.required])
   
  });

  constructor(){  }
  ngOnInit () : void {
  
  }
  get nombre (){
    return this.formularioRegistro.get('nombre');
  }
  get apellido (){
    return this.formularioRegistro.get('apellido');
  }
  get email (){
    return this.formularioRegistro.get('email');
  }
  get password (){
    return this.formularioRegistro.get('password');
  }

  get fechaNacimiento (){
    return this.formularioRegistro.get('fechaNacimiento');
  }
  iniciarSesion(){
    console.log(this.formularioRegistro.value);
    console.log(this.formularioRegistro.value);

  }


}
