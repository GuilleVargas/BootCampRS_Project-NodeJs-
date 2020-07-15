import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoAngularRS';
  pathname: string;

  constructor(private router: Router){

    this.router.events.subscribe((event) =>{
      if (event instanceof NavigationEnd){
        console.log(event.url);
        this.pathname = event.url;
      }
    });
    
  }

}
