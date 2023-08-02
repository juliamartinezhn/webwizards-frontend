import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router) { }

  requiredPath:string = '';
  goTo:string = '';

  ngOnInit() {
    const url = this.router.url;
    
    if (url==='/registro'){
      this.requiredPath = 'Inicio Sesión';
      this.goTo = '/inicio-sesion';
      
    } else {
      this.requiredPath = 'Registrate';
      this.goTo = '/registro'
    }
  }
  

}
