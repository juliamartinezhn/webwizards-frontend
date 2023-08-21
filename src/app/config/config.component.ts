import { Component , OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from 'src/models/model';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent  implements OnInit{
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
}
