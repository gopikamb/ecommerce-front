import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email="" 
    password=""
    token=""
    username=""
  constructor(private api:ApiService,private loginRouter:Router){}
  login(){
  this.api.login(this.email,this.password).subscribe((result:any)=>{
  alert("Login Successful")
  this.username=result.username
  this.token=result.token
  localStorage.setItem("token",this.token)
  localStorage.setItem("username",this.username)

  this.loginRouter.navigateByUrl('') 
  },
  (result:any)=>{
  alert(result.error);
  }
  )
  }
}
