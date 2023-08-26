
import { Component, ViewChild, ElementRef, AfterViewInit, Input, OnChanges  } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { ProyectosService } from '../services/proyectos.service';
import { CarpetasService } from '../services/carpetas.service';
import { Projects } from 'src/models/model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {

  @ViewChild('iframeRef', { static: true }) iframeRef!: ElementRef<HTMLIFrameElement>;

  ngAfterViewInit() {
    this.run(this.proyecto);
  }
  htmlCode: string = "";
  cssCode: string = "";
  jsCode: string = "";
  output: SafeHtml = "";

  proyecto: Projects = {};
  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private usuariosServicio: UsuariosService,
    private proyectosServicio: ProyectosService,
    private carpetasService: CarpetasService,
    private datePipe: DatePipe
  ) { }

  

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      const idProyecto = params['idProyecto'];
      await this.getInfoProyecto(idProyecto);
      
    });
    
  }

  getInfoProyecto(idProyecto:string) {
    this.proyectosServicio.obtenerInfoProyecto(idProyecto)
      .subscribe(
        res => {
          this.proyecto = res.project;
          this.run(this.proyecto);
          
        }
      );
  }

  saveProject(proyecto:Projects){
    this.proyectosServicio.guardarProyecto(proyecto._id, 
      {
        html: proyecto.html,
        css: proyecto.css,
        js: proyecto.js,

      }).subscribe(
        res => {
          alert(res.message);
          this.proyecto = res.proyecto;
          console.log(res)
        }
      );
  }

  goBack() {
    window.history.back();
  }

  run(proyecto:any) {
    const fullCode = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          ${proyecto.css}
        </style>
      </head>
      <body>
        ${proyecto.html}
        <script>
          ${proyecto.js}
        </script>
      </body>
      </html>
    `;
    // this.iframeRef.nativeElement.srcdoc = fullCode;
    this.output = this.sanitizer.bypassSecurityTrustHtml(fullCode);

  }
}
