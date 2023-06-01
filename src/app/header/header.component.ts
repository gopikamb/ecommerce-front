import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemCount =0
  
constructor(private api:ApiService,private router:Router){
}
ngOnInit(): void {
  this.api.cartItemCount.subscribe(
    (count:any)=>{
     this.totalItemCount = count
    }
  )
}
search(event:any){
  //assign value to behaviour subject
  //next method - assign value to behavior subject
  this.api.searchTerm.next(event.target.value)
  
}
logout(){
  localStorage.clear()
  alert("logout")
  this.router.navigateByUrl('')
}
}
