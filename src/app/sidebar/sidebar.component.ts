import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private usuariosServicio: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  isActiveDashboard = false;
  isActiveProyectos = false;
  isActiveSnippets = false;
  isActiveShared = false;
  isActiveconfig = false;
  active = '';

  ngOnInit(): void {
    // this.activate('dashboard') ;
    // this.route.paramMap.subscribe(async params => {

      this.activate(this.route.snapshot.routeConfig?.path);
      console.log(this.route.snapshot.routeConfig?.path);
      
      // if (this.route.snapshot.routeConfig?.path === 'snippets') {
      //   // Estamos en la ruta "snippets", puedes hacer algo aquí
      //   console.log('Estamos en la ruta "snippets".');
      // }
      

    // });
  }

  activate(item: any) {
    // this.isActiveDashboard = item === 'dashboard';
    // this.isActiveProyectos = item === 'proyectos';
    // this.isActiveSnippets = item === 'snippets';
    // this.isActiveShared = item === 'compartido';
    // this.isActiveconfig = item === 'config';
    this.active = item;
  }

  cerrarSesion() {
    // routerLink="/inicio-sesion"
    this.usuariosServicio.cerrarSesion()
      .subscribe(
        (res: any) => {
          if (res.statusCode === 200) {
            this.router.navigate(['/inicio-sesion']);
          }

        }
      );
  }
}

