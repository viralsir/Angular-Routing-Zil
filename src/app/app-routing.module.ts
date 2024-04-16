import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ContactusComponent} from "./contactus/contactus.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path:"aboutus",component:AboutusComponent},
  { path:"Contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
