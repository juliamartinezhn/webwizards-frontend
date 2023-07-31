import { Component } from '@angular/core';
import { Folders, Snippets } from 'src/models/model'; 

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent {
  content:Array<Folders | Snippets> = [
    {
      nameSnippet:"Bucle for in"
    },
    {
      nameFolder:"Funciones",
      children:[
        {
          nameSnippet:"Función flecha"
        },
        {
          nameSnippet:"Función normal"
        }
      ]
    },
    {
      nameFolder:"Condicionales",
      children:[
        {
          nameSnippet:"Condicional if"
        }
      ]
    },
    {
      nameSnippet:"Media queries"
    },
    {
      nameSnippet:"Bucle for of"
    }
  ];

}
