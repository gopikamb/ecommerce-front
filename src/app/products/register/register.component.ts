import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username=''
      email=''
      password=''
      constructor(private api:ApiService,private registerRouter:Router){}
      register(){
        this.api.register(this.username,this.email,this.password).subscribe((result:any)=>
          { 
           alert(result);
           this.registerRouter.navigateByUrl('')
            
            },
            (result:any)=>{
              alert(result.error.message);
            })
          
          
          
      }
}
