
import { Component, ViewChild, ElementRef, AfterViewInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {
  
  @ViewChild('iframeRef', { static: true }) iframeRef!: ElementRef<HTMLIFrameElement>;

  ngAfterViewInit() {
    this.run();
  }
  htmlCode: string = "";
  cssCode: string = "";
  jsCode: string = "";
  output: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer) {}

  run() {
    const fullCode  = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          ${this.cssCode}
        </style>
      </head>
      <body>
        ${this.htmlCode}
        <script>
          ${this.jsCode}
        </script>
      </body>
      </html>
    `;
    // this.iframeRef.nativeElement.srcdoc = fullCode;
    this.output = this.sanitizer.bypassSecurityTrustHtml(fullCode);
    
  }
}
