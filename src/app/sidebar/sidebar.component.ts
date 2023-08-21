import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(
    private usuariosServicio: UsuariosService,
    private router: Router,
  ){}
 
  isActiveDashboard = false;
  isActiveProyectos = false;
  isActiveSnippets = false;
  isActiveconfig=false;

  activate(item: string) {
    this.isActiveDashboard = item === 'dashboard';
    this.isActiveProyectos = item === 'proyectos';
    this.isActiveSnippets = item === 'snippets';
    this.isActiveconfig = item === 'config';
  }

  cerrarSesion(){
    // routerLink="/inicio-sesion"
    this.usuariosServicio.cerrarSesion()
    .subscribe(
      (res:any)=>{
        if(res.statusCode===200){
          this.router.navigate(['/inicio-sesion']);
        }
        
      }
    );
  }
}

