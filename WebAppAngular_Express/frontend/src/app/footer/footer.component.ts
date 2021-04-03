import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() on_mylist:any;
  mobile:any;
  constructor(private modalService: NgbModal,private router: Router,private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    if (window.innerWidth >=992){
      this.mobile = false;
    }
    else{
      this.mobile = true;
    }
  }

  open(content:any) {
    this.modalService.open(content);
  }


}
