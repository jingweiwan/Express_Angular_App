import { Component, OnInit, HostListener} from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent,NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs';
import {AppService} from '../app.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[NgbCarouselConfig]
  
})
export class ContentComponent implements OnInit {
  
  results:any = [];
  Popular_movie_results:any=[];
  Top_rated_Movie_results:any = [];
  Top_rated_TV_results:any = [];
  Popular_TV_results:any = [];
  Trend_Movie_results:any = [];
  Trend_TV_results:any = [];
  backdrop_trend:string[] = [];
  obj_list:any = [];
  obj_movie_list:any = [];
  obj_popular_tv_list:any = [];
  obj_toprated_tv_list:any = [];
  obj_toprated_movie_list:any = [];
  obj_trend_movie_list:any = [];
  obj_trend_TV_list:any = [];
  public innerWidth: any;
  continue_watch_list:any=[];
  continue_watch_list_6:any=[];
  continue_set:any;
  mobile:any;
  storage:any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    return this.innerWidth;
  }
  showNavigationIndicators=false
  constructor(private appService: AppService, config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;

  }


  ngOnInit(): void {
    if (window.innerWidth >=1280){
      this.mobile = false;
    }
    else{
      this.mobile = true;
    }
    if (!window.localStorage.getItem("watchlist")){
      window.localStorage.setItem("watchlist",JSON.stringify([]));
    }
    if (!window.localStorage.getItem("continue")){
      window.localStorage.setItem("continue",JSON.stringify([]));
    }
    this.storage = window.localStorage;
    let x = JSON.parse(this.storage.getItem("continue"));
    let y= this.storage.getItem("continue");

    if(y == "[]"){this.continue_set=false; }
    else{this.continue_set = true;}
    this.continue_watch_list=x;
    let k = 0;
    while (k<this.continue_watch_list.length){
      this.continue_watch_list_6.push(this.continue_watch_list.slice(k,k+=6))
    }
    
    this.appService.getNowPlaying().subscribe(data=>{
        //console.log(data);
        this.results = data;

        for(let i = 0; i<=4; i++ ){
          this.obj_list.push(this.results.results[i]);
          this.backdrop_trend.push("https://image.tmdb.org/t/p/original/"+this.obj_list[i].backdrop_path);
          
        }
    });
    //Popular Movies

    this.appService.getPopularMovie().subscribe(data=>{
      this.Popular_movie_results = data;
      let j = 0;


      while (j<this.Popular_movie_results.results.length){
        this.obj_movie_list.push(this.Popular_movie_results.results.slice(j,j+=6))
      }
    });

    //Top rated Movies
    this.appService.getTopMovie().subscribe(data=>{
      this.Top_rated_Movie_results = data;
      let j = 0;
      while (j<this.Top_rated_Movie_results.results.length){
        this.obj_toprated_movie_list.push(this.Top_rated_Movie_results.results.slice(j,j+=6))
      }
    });
    //Top rated TV
    this.appService.getTopTV().subscribe(data=>{
      this.Top_rated_TV_results = data;
      let j = 0;
      while (j<this.Top_rated_TV_results.results.length){
        this.obj_toprated_tv_list.push(this.Top_rated_TV_results.results.slice(j,j+=6))
      }
    });
    //Trending Movies
    this.appService.getTrendMovie().subscribe(data=>{
      this.Trend_Movie_results = data;
      let j = 0;
      while (j<this.Trend_Movie_results.results.length){
        this.obj_trend_movie_list.push(this.Trend_Movie_results.results.slice(j,j+=6))
      }
    });
    //Trending TV
    this.appService.getTrendTV().subscribe(data=>{
      this.Trend_TV_results = data;
      let j = 0;
      while (j<this.Trend_TV_results.results.length){
        this.obj_trend_TV_list.push(this.Trend_TV_results.results.slice(j,j+=6))
      }
    });
    //Popular TV
    this.appService.getPopularTV().subscribe(data=>{
      this.Popular_TV_results = data;
      let j = 0;


      while (j<this.Popular_TV_results.results.length){
        this.obj_popular_tv_list.push(this.Popular_TV_results.results.slice(j,j+=6))
      }

    });

    

  };






}
