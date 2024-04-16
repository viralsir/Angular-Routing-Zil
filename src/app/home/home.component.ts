import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  msg:string="Wel come";
  constructor(public activerouter:ActivatedRoute) {
    activerouter.params.subscribe(data=>{this.msg+=data['uname']},error => console.log(error),()=>{})
  }

}
