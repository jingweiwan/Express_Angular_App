import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {AppService} from '../app.service';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers:[NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  showNavigationIndicators = false;
  @Input() obj_movie_list:any
  mobile:any;
  constructor(private appService: AppService, config: NgbCarouselConfig) { 
    config.interval = 5000;
    config.wrap = true;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    
  }
  
  ngOnInit(): void {
    if (window.innerWidth >=992){
      this.mobile = false;
    }
    else{
      this.mobile = true;
    }
  
  }

}
