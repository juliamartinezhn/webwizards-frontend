import { Component, Input, OnInit } from '@angular/core';
import { ContentItem, Folders, Projects, Snippets } from 'src/models/model';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CarpetasService } from '../services/carpetas.service';
@Component({
  selector: 'app-reusable-model',
  templateUrl: './reusable-model.component.html',
  styleUrls: ['./reusable-model.component.css']
})
export class ReusableModelComponent implements OnInit {
  //Puede ser una carpeta, un proyecto o un snippet
  @Input() content: Array<ContentItem> = [];

  @Input() type: string = '';
  contentHistory: any = [];
  navigationHistory: string = '';

  constructor(
    private carpetasService: CarpetasService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // console.log(this.content[0].children)
    // this.contentHistory.push(this.content);
    this.route.params.subscribe(async params => {
      this.navigationHistory = params['carpetaNombre'];
      console.log(this.navigationHistory)
    });

  }
  async activate(item: any) {
    // console.log(await this.getCarpetasHijas(item))
    // item.children = await this.getCarpetasHijas(item);
    // console.log(item.children)
    // if (item.children) {
    //   console.log(item);
    //   console.log(this.contentHistory);
    //   const folderName = item.nameFolder;
    //   this.content = item.children;
    //   this.contentHistory.push(item.children);
    //   console.log(item.children);
    //   if (folderName) {
    //     this.navigationHistory.push(folderName);
    //     console.log(this.navigationHistory);
    //   }
    // }
    this.router.navigate(['/proyectos', item._id]);
  }
  goBack() {
    // if (this.navigationHistory.length > 0) {
    //   console.log(this.contentHistory);
    //   this.contentHistory.pop();
    //   this.navigationHistory.pop();
    //   this.content = this.contentHistory[this.contentHistory.length - 1];
    //   console.log(this.contentHistory)
    //   console.log(this.contentHistory.length - 1)
    //   console.log(this.contentHistory[this.contentHistory.length - 1])

    // }
    window.history.back();
  }

  getCarpetasHijas(id: any) {

    let children;
    console.log(id)
    this.carpetasService.obtenerCarpetasHijas(id)
      .subscribe(
        (response: any) => {
          if (response.statusCode === 200) {
            children = response.children;
            console.log(children);
            return children;
          } else {

            alert(response.message);
            return ;
          }
        },
        (error: any) => {
          console.log(error);
          // alert(error);
        }
      );
      

  }

}
