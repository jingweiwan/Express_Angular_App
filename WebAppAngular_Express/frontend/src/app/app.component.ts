import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Angular App';
  on_mylist:any;
  on_home:any;
  constructor(private router: Router, private activatedRouter: ActivatedRoute){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  ngOnInit(){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
            console.log(event.url)
            if(event.url=="/mylist"){
              this.on_mylist=true;
              this.on_home=false;
            }
            if(event.url=="/"){
              this.on_mylist=false;
              this.on_home=true;
            }

      }
    })
  }
}
