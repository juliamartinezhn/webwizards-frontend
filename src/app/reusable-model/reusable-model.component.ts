import { Component, Input, OnInit } from '@angular/core';
import { ContentItem, Folders, Projects, Snippets } from 'src/models/model';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CarpetasService } from '../services/carpetas.service';
@Component({
  selector: 'app-reusable-model',
  templateUrl: './reusable-model.component.html',
  styleUrls: ['./reusable-model.component.css']
})
export class ReusableModelComponent  {
  //Puede ser una carpeta, un proyecto o un snippet
  @Input() content: Array<ContentItem> = [];

  @Input() type: string = '';

  constructor(
    private carpetasService: CarpetasService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

 
  activate(item: any) {
    if (item.nameFolder) {
      this.router.navigate(['/proyectos/', item._id]);
    }
    
  }
  goToEditor(item:any){
    this.router.navigate(['/editor/', item._id]);
  }
  

  getCarpetasHijas(id: any) {

    let children;
    console.log(id)
    this.carpetasService.obtenerCarpetasHijas(id)
      .subscribe(
        (response: any) => {
          if (response.statusCode === 200) {
            children = response.children;
            return children;
          } else {

            alert(response.message);
            return ;
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
      

  }

}
