import { Component , OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from 'src/models/model';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent  implements OnInit{
  availablePlans: string[] = ['Gratis', 'Plus', 'Avanzado'];
  planesvacios: string[] | undefined;
  cambioPlan = new FormGroup({
   
    plan: new FormControl('',[Validators.required])
   
});

get plan() {
  return this.cambioPlan.get('plan');
}

usuarioLoggeado:Usuario = {};
  constructor(
    private usuariosServicio: UsuariosService
  ){}
  ngOnInit(): void {
    this.getUsuarioLoggeado();
    
  }

   getUsuarioLoggeado(){
    this.usuariosServicio.obtenerInfoUsuario()
    .subscribe(
      res=>{
        this.usuarioLoggeado =  res;
      }
    );
    
  }


  changePlan() {
    const unselectedPlans = this.availablePlans.filter((plan: string | undefined) => plan !== this.usuarioLoggeado.plan);
    this.planesvacios=unselectedPlans;

  }


  guardarPlan(){
    this.usuariosServicio.cambiarPlan(this.usuarioLoggeado._id,
      {
        nuevoPlan:this.cambioPlan.value.plan
      }
      
      )   .subscribe(
      (res:any)=>{
        this.getUsuarioLoggeado();
        alert(res.message);
        
      }
    );
  }
}
