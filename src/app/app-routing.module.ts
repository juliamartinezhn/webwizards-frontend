import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { EditorComponent } from './editor/editor.component';
import { PlanesComponent } from './planes/planes.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConfigComponent } from './config/config.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  {
    path:"landing-page",
    component: LandingPageComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  { 
    path: '',   
    redirectTo: '/landing-page',
    pathMatch: 'full' 
  },
  {
    path: 'proyectos/:carpetaNombre',
    component: ProjectsComponent
  },
  { 
    path: 'snippets',   
    component: SnippetsComponent 
  },
  {
    path: 'compartido/:carpetaNombre',
    component: SharedComponent
  },
  {
    path:'editor/:idProyecto',
    component: EditorComponent 
  },

  {
    path: 'registro',
    component: SignupComponent
  },
  {
    path: 'inicio-sesion',
    component: LoginComponent
  },
  {
    path:'planes',
    component:PlanesComponent
  },
  {
    path : 'config',
    component:ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
