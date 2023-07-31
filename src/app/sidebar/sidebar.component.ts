import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
 
  isActiveDashboard = false;
  isActiveProyectos = false;
  isActiveSnippets = false;

  activate(item: string) {
    this.isActiveDashboard = item === 'dashboard';
    this.isActiveProyectos = item === 'proyectos';
    this.isActiveSnippets = item === 'snippets';
  }
}

