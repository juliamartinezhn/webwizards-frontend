import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  
  {
    path:"dashboard",
    component: DashboardComponent
  },
  { 
    path: '',   
    redirectTo: '/dashboard',
    pathMatch: 'full' 
  },
  { 
    path: 'proyectos',   
    component: ProjectsComponent 
  },
  { 
    path: 'snippets',   
    component: SnippetsComponent 
  },
  {
    path:'editor',
    component: EditorComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
