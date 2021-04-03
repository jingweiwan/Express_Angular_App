import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import {NgbAlert, NgbAlertConfig, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[NgbAlertConfig]
})
export class DetailComponent implements OnInit {
  id:any;
  movie_results:any = [];
  video_results:any = [];
  movie_review_results:any=[];
  movie_review_results_list:any=[];
  recommend_movie_results:any=[];
  similar_movie_results:any=[];
  movie_cast_results:any=[];
  movie_cast_results_mobile:any=[];
  Youtube_key:string = "";
  share_url:any;
  movie_title:string = "";
  tagline:string = "";
  genres:any = [];
  recommend_item:any;
  spoken_languages:any = [];
  release_date:string=""; 
  runtime_hours:any; 
  runtime_minutes:any;
  overview:string="";
  cast_list:any=[];
  vote:any;
  actor_image:any;
  storage:any;
  successMessage = '';
  alert_type = "";
  create_date_list:any=[];
  mobile:any;
  obj_recommend_movie_list:any=[];
  obj_similar_movie_list:any=[];
  review_path_list:any=[];

  cast_detail_results:any=[];
  actor_name:any;

  birthday:any;
  birth_place:any;
  gender:any;
  website:any;
  known_for:any;
  other_name:any;
  bio:any;
  similar_item:any;
  external_results:any;
  fb:any;
  ins:any;
  twitter:any;
  imdb:any;
  month_list=["January","February","March","April","May","June","July","August","September","October","November","December"]
  private _success = new Subject<string>();

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;
  constructor(private route: ActivatedRoute, private appService: AppService, alertConfig: NgbAlertConfig,config: NgbModalConfig, private modalService: NgbModal) { 
    config.centered = true;
    config.scrollable=true;
    config.size="lg";
  }
  
  ngOnInit(): void {
    if (window.innerWidth >=992){
      this.mobile = false;
    }
    else{
      this.mobile = true;
    }
    this.storage = window.localStorage;
    if (!localStorage.getItem("watchlist")){
      localStorage.setItem("watchlist",JSON.stringify([]));
    }
    if (!localStorage.getItem("continue")){
      localStorage.setItem("continue",JSON.stringify([]));
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);  
    this.route.params.subscribe(params => {
      this.id = params['id'];

    });
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
    this.appService.getMovieDetail(this.id).subscribe(data=>{
      this.movie_results = data;

      this.movie_title = this.movie_results.title;
      this.tagline = this.movie_results.tagline;
      this.genres = this.movie_results.genres;
      this.spoken_languages = this.movie_results.spoken_languages;
      this.release_date = this.movie_results.release_date.substring(0,4);
      this.runtime_hours = Math.floor(this.movie_results.runtime/60);
      this.runtime_minutes = this.movie_results.runtime%60;
      this.vote = this.movie_results.vote_average;
      this.overview = this.movie_results.overview;

      let x = JSON.parse(this.storage.getItem("continue"));
      let inArray=false;
      for (let i = 0; i<x.length; i++){
        if(x[i].id==this.id){
          inArray = true;
          x.splice(i,1);
          x.unshift(this.movie_results);
        }
      }
      
      if (!inArray){
        x.unshift(this.movie_results);
      }
      this.storage.setItem("continue",JSON.stringify(x));
      

    });
    this.appService.getMovieVideo(this.id).subscribe(data=>{
      this.video_results = data;
      if (this.video_results.results){
        for (let i = 0; i< this.video_results.results.length; i++){
          if(this.video_results.results[i].type == "Trailer"){
            this.Youtube_key= this.video_results.results[i].key;
            break;
          }
          if(this.video_results.results[i].type == "Teaser"){
            this.Youtube_key= this.video_results.results[i].key;
            break;
          }
          else{
            this.Youtube_key = "tzkWB85ULJY";
          }
        }
      }
      else{
        this.Youtube_key = "tzkWB85ULJY";
      } 
      this.share_url = encodeURIComponent("https://www.youtube.com/watch?v="+this.Youtube_key+"\n");
    });

    //Movie cast
    this.appService.getMovieCast(this.id).subscribe(data=>{
      this.movie_cast_results = data;
      for(let i = 0;i<this.movie_cast_results.cast.length;i++){
        if(this.movie_cast_results.cast[i].profile_path){
            this.cast_list.push(this.movie_cast_results.cast[i]);
        }
      }
    });

    //Movie review
    this.appService.getMovieReview(this.id).subscribe(data=>{
      this.movie_review_results = data;
      this.movie_review_results_list=this.movie_review_results.results;
      let temp_arr=[];
      if(this.movie_review_results.results.length>10){
        for(let i=0; i<10;i++){
          temp_arr.push(this.movie_review_results.results[i])
        }
        this.movie_review_results_list=temp_arr;
      }
    
      for(let i=0; i<this.movie_review_results.results.length;i++){
        if(this.review_path_list.length<10){
          if(this.movie_review_results.results[i].author_details.avatar_path){
            if(this.movie_review_results.results[i].author_details.avatar_path.substring(0,5)=="/http"){
              this.review_path_list.push(this.movie_review_results.results[i].author_details.avatar_path.substring(1));
            }
            else{
              this.review_path_list.push("https://image.tmdb.org/t/p/w500/"+this.movie_review_results.results[i].author_details.avatar_path);
            }
          }
          else{
            this.review_path_list.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU");
          }
        }
        
      }
      
      for(let i=0; i<this.movie_review_results_list.length;i++){
        let hour_string = "";
        let year = this.movie_review_results_list[i].created_at.substring(0,4);
        let month = this.month_list[parseInt(this.movie_review_results_list[i].created_at.substring(5,7))-1];
        let day = this.movie_review_results_list[i].created_at.substring(8,10);
        let hour = parseInt(this.movie_review_results_list[i].created_at.substring(11,13));
        let rest_time = this.movie_review_results_list[i].created_at.substring(13,19);
        if (hour>12){
          hour_string=(hour-12).toString()+rest_time+" PM";
        }
        else{
          hour_string=hour.toString()+rest_time+" AM"
        }
        
        let new_string = month+" "+day+", "+year+", "+hour_string;
        this.create_date_list.push(new_string);
      }
      
    });
    
    //recommend movie
    this.appService.getRecommendMovie(this.id).subscribe(data=>{
      this.recommend_movie_results = data;
      let j = 0;

      if(this.recommend_movie_results .results.length==0){
        this.recommend_item=false;
      }
      else{
        this.recommend_item=true;
      }

      while (j<this.recommend_movie_results.results.length){
        this.obj_recommend_movie_list.push(this.recommend_movie_results.results.slice(j,j+=6))
      }

    });

    //similar movie
    this.appService.getSimilarMovie(this.id).subscribe(data=>{
      this.similar_movie_results = data;
      let j = 0;
      if(this.similar_movie_results .results.length==0){
        this.similar_item=false;
      }
      else{
        this.similar_item=true;
      }


      while (j<this.similar_movie_results .results.length){
        this.obj_similar_movie_list.push(this.similar_movie_results .results.slice(j,j+=6))
      }
    });


  }

  Add_watchlist(){
    let x = JSON.parse(this.storage.getItem("watchlist"));
    x.push(this.movie_results);
    this.storage.setItem("watchlist",JSON.stringify(x));
    this._success.next('Added to watchlist.');
    this.alert_type = "success";
  }
  remove_watchlist(){
    let x = JSON.parse(this.storage.getItem("watchlist"));
    for (let j = 0; j < x.length;j++){
      if (x[j].id == this.movie_results.id){
        x.splice(j,1);
      }
    }
    this.storage.setItem("watchlist",JSON.stringify(x));
    this._success.next('Removed from watchlist.');
    this.alert_type = "danger";
  }
  
  isAdded(){
    let x = JSON.parse(this.storage.getItem("watchlist"));
    for (let j = 0; j < x.length;j++){
      if (x[j].id == this.movie_results.id){
        return true;
      }
    }
    return false
  }
  shareFB(){
    window.open("https://www.facebook.com/sharer/sharer.php?u="+this.share_url);
  }
  shareTwitter(){
    window.open("https://twitter.com/share?text=Watch "+this.movie_title+encodeURIComponent("\n")+"&url="+this.share_url+"&hashtags=USC,CSCI571,FightOn");
  }

  open_imdb(imdb_id:any){
    window.open("https://www.imdb.com/name/"+imdb_id,"_blank");
  }
  open_ins(ins_id:any){
    window.open("https://www.instagram.com/"+ins_id,"_blank");
  }
  open_fb(fb_id:any){
    window.open("https://www.facebook.com/"+fb_id,"_blank");
  }
  open_twitter(twitter_id:any){
    window.open("https://www.twitter.com/"+twitter_id,"_blank");
  }
  

  open(content:any,actor_id:any,actor_n:any){
    //cast detail
    this.actor_name=actor_n;
    this.appService.getCastDetail(actor_id).subscribe(data=>{
      this.cast_detail_results = data;

      if(this.cast_detail_results.profile_path){
        this.actor_image="https://image.tmdb.org/t/p/w500/"+this.cast_detail_results.profile_path;
      }
      else{
        this.actor_image="https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png";
      }
      this.birthday=this.cast_detail_results.birthday;
      this.birth_place = this.cast_detail_results.place_of_birth;
      if(this.cast_detail_results.gender==2){
          this.gender="Male";
      }
      else{
        this.gender="Female";
      }
      if(this.cast_detail_results.website){
        this.website="website";
      }
      this.known_for="Known for: "+this.cast_detail_results.known_for_department;
      this.other_name="Also known as: "
      for(let i = 0; i < this.cast_detail_results.also_known_as.length;i++){
        this.other_name+=this.cast_detail_results.also_known_as[i]+", ";
      }
      this.other_name = this.other_name.slice(0,-2);
      if(!this.cast_detail_results.also_known_as){
        this.other_name = "";
      }
      this.bio = this.cast_detail_results.biography;
    });

    this.appService.getExternalDetail(actor_id).subscribe(data=>{
      this.external_results = data;

      if(this.external_results.imdb_id){this.imdb=this.external_results.imdb_id;}
      else{this.imdb="";}
      if(this.external_results.facebook_id){this.fb=this.external_results.facebook_id;}
      else{this.fb="";}
      if(this.external_results.instagram_id){this.ins=this.external_results.instagram_id;}
      else{this.ins="";}
      if(this.external_results.twitter_id){this.twitter=this.external_results.twitter_id;}
      else{this.twitter="";}

    });
    this.modalService.open(content);

  }
  

}
