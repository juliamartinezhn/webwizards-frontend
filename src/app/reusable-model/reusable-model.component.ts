import { Component, Input, OnInit } from '@angular/core';
import { ContentItem, Folders, Projects, Snippets } from 'src/models/model'; 
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reusable-model',
  templateUrl: './reusable-model.component.html',
  styleUrls: ['./reusable-model.component.css']
})
export class ReusableModelComponent implements OnInit{
  //Puede ser una carpeta, un proyecto o un snippet
  @Input() content: Array<ContentItem> = [];
  @Input() type:string='';
  contentHistory:any= [];
  navigationHistory: string[] = [];

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.contentHistory.push(this.content);
  }
  
  

  activate(item: ContentItem) {
    if (item.children) {
      const folderName = item.nameFolder;
      this.content = item.children;
      this.contentHistory.push(item.children);
      if (folderName) {
        this.navigationHistory.push(folderName); 
      }
    }
  }
  goBack() {
    if (this.navigationHistory.length > 0) {
      this.contentHistory.pop();
      this.navigationHistory.pop();
      this.content = this.contentHistory[this.contentHistory.length - 1];
      
    }
  }

}
