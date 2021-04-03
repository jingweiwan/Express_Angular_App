import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }



  getNowPlaying(){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/now_playing');
  }
  getPopularMovie(){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/popular_movie');
  }
  getPopularTV(){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/popular_tv');
  }
  getTopMovie(){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/top_movie');
  }
  getTrendMovie(){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/trend_movie');
  }
  getTrendTV(){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/trend_tv');
  }
  getTopTV(){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/top_tv');
  }
  getMovieDetail(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/search_movie/'+id.toString());
  }
  getTVDetail(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/search_tv/'+id.toString());
  }
  getMovieVideo(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/movie_youtube/'+id.toString());
  }
  getTvVideo(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/tv_youtube/'+id.toString());
  }
  getRecommendMovie(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/recommend_movie/'+id.toString());
  }
  getRecommendTV(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/recommend_tv/'+id.toString());
  }
  getSimilarMovie(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/similar_movie/'+id.toString());
  }
  getSimilarTV(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/similar_tv/'+id.toString());
  }
  getTVcast(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/tv_cast/'+id.toString());
  }
  getMovieCast(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/movie_cast/'+id.toString());
  }
  getTVreview(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/tv_review/'+id.toString());
  }
  getMovieReview(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/movie_review/'+id.toString());
  }
  getCastDetail(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/cast_detail/'+id.toString());
  
  }

  getExternalDetail(id:Number){
    return this.http.get('https://backendexpressserver.wl.r.appspot.com/external/'+id.toString());
  }
  getMultResult(search_text:string){
    return this.http.get<any>('https://backendexpressserver.wl.r.appspot.com/search/'+search_text);
  }
  getMult(search_text:string){
    return this.http.get<any>('https://backendexpressserver.wl.r.appspot.com/search/'+search_text);
  }
}
