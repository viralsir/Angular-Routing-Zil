import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router:Router) {
  }


  msg:string=""

  CheckUser(username:any,password:any) {

    if(username.value=="admin" && password.value=="123")
    {
       // this.msg="login successfull";
        this.router.navigate(["home",username.value])
    }
    else{
      this.msg="wrong username or password.";
    }

  }
}
