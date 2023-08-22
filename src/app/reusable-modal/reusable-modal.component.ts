
import { Component, Input, Output, EventEmitter , OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reusable-modal',
  templateUrl: './reusable-modal.component.html',
  styleUrls: ['./reusable-modal.component.css']
})
export class ReusableModalComponent implements OnInit {
  
  
  formulario = new FormGroup({
    texto:  new FormControl('', [Validators.required])
    
  })
  
  @Input() title: string| undefined;
  @Input() Crear: string | undefined;
  @Input() exampleModal: string | undefined;
  @Input() exampleModalLabel: string | undefined;
  @Input() inputValue: string| undefined;
  @Output() closeModalEvent = new EventEmitter<void>();
  
  
  
  get texto(){
    return this.formulario.get('texto');
  }
  


  ngOnInit(): void {


  } 
  
  guardar (){
    console.log("guardado");
  }
}
