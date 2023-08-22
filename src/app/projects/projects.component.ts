import { Component } from '@angular/core'; 
import { Folders, Projects } from 'src/models/model'; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  content:Array<Folders | Projects> = [
    {
      nameProject:"Prueba"
    },
    {
      nameFolder:"ProyectoDW",
      children:[
        {
          nameProject:"Login"
        },
        {
          nameProject:"Registro"
        },
        {
          nameProject:"Home"
        },
        {
          nameFolder:"ProyectoOtro",
          children:[
            {
              nameProject:"LoginOtros"
            },
            {
              nameProject:"RegistroOtros"
            },
            {
              nameProject:"HomeOtros"
            },
          ]
        },
      ]
    },
    {
      nameFolder:"Proyecto POO",
      children:[
        {
          nameProject:"Sign Up"
        }
      ]
    },
    {
      nameProject:"Appstore"
    },
    {
      nameProject:"Pokedex"
    }
  ];

}
