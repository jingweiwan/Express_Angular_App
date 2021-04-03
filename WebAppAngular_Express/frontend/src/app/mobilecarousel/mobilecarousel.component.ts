import { Component, Input, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mobilecarousel',
  templateUrl: './mobilecarousel.component.html',
  styleUrls: ['./mobilecarousel.component.css']
})
export class MobilecarouselComponent implements OnInit {

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
