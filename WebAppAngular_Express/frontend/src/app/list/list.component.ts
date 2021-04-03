import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  storage:any;
  watch_list:any=[];
  watch_list_6:any=[];
  has_item:any;
  mobile:any;
  
  constructor() { }

  ngOnInit(): void {
    this.storage = window.localStorage;
    let x=this.storage.getItem("watchlist");
    this.watch_list = JSON.parse(this.storage.getItem("watchlist"));
    if (window.innerWidth >=992){
      this.mobile = false;
    }
    else{
      this.mobile = true;
    }
    if(x!="[]"){
      this.has_item = true;
      let j = 0;
      while (j<this.watch_list.length){
        this.watch_list_6.push(this.watch_list.slice(j,j+=6))
      }
    }
    else{
      this.has_item = false;
    }
  }

}
