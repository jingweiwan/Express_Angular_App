import { Component, Input, OnInit } from '@angular/core';
import {Observable, OperatorFunction,EMPTY} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, catchError, map, tap} from 'rxjs/operators';
import * as $ from'jquery';
import { AppService } from '../app.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  @Input() on_mylist:any;
  @Input() on_home:any;
  modal:any;
  param:any;
  
  constructor(private appService: AppService ,private http: HttpClient,private route: ActivatedRoute) { 
    
    $(document).ready(function() {
      $('li.active').removeClass('active');
      
      $('a[routerLink="' + location.pathname + '"]').closest('li').addClass('active'); 
    });
  }
  
  selectedItem(selectitem:any){
    window.open("http://localhost:4200/watch/"+selectitem.item.media_type+"/"+selectitem.item.id.toString(),"_self")
    
  }
  
  resultFormatValue(value: any) {   
    if(value.name){return value.name;}
    if(value.title){return value.title}
      
    
  } 
  inputFormatValue(value: any)   {
    if(value.name)
      return value.name
    if(value.title)
      return value.title
  }
  search = (text$: Observable<string>) => {
    if(text$){text$.subscribe(data=>{
      if(data.length==0){
        $('.dropdown-menu').removeClass('show');
      }
      else{
        $('.dropdown-menu').addClass('show');
      }
      
    })}

    return text$.pipe(      
        debounceTime(200), 
        distinctUntilChanged(),

        switchMap( (term) => term.length==0? []:this.appService.getMultResult(term) ) 
                   
    );                 
  }
  
  

  ngOnInit(): void {
    
  }

  
}
