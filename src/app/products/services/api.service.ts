import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{BehaviorSubject} from 'rxjs';
const options={headers:new HttpHeaders}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //to hold search term as behaviour subject
  searchTerm = new BehaviorSubject('')
  //to hold cart items as behavior subject
   cartItemCount= new BehaviorSubject(0)

   BASE_URL = 'http://localhost:3000'

  constructor(private http:HttpClient,private router:Router) {
       this.cartCount()
    }
   //append token()
   appendtoken(){
    const token = localStorage.getItem("token")||''
    let headers = new HttpHeaders()
  if(token){
    headers = headers.append('verifytoken',token)
    options.headers = headers
  }  
  return options      
 }
   
    //get all products api
    getAllProducts(){
      //call api
      return this.http.get(`${this.BASE_URL}/products/get-all-products`)
  }

  //View products detail api
  viewAproduct(id:any){
    //call api
    return this.http.get(`${this.BASE_URL}/products/view/${id}`,this.appendtoken())
  }

  //products/add-to-wishlist
  addtowishlist(product:any){
    const body = {
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image
    }
    //api call
    return this.http.post(`${this.BASE_URL}/products/add-to-wishlist`,body,this.appendtoken())
  }
  //get all item from wishlist
  getWishlistItems(){
    //api call
    return this.http.get(`${this.BASE_URL}/wishlist/get-all-items`,this.appendtoken())
  }
  //removing an item from wishlist
   removeWishlistItem(id:any){
    //api call
    return this.http.delete(`${this.BASE_URL}/wishlist/remove-item/:id}`,this.appendtoken())
   }
   //add to cart
   addToCart(product:any){
    const body = {
id:product.id,
title:product.title,
price:product.price,
image:product.image,
quantity:product.quantity    
}
//api call
return this.http.post(`${this.BASE_URL}/products/add-to-cart`,body,this.appendtoken())
   }

   //getCart
   getCart(){
    //api call
    return this.http.get(`${this.BASE_URL}/cart/get-all-items`,this.appendtoken())
   }

  //cartCount
  cartCount(){
    this.getCart().subscribe(
    (result:any)=>{
this.cartItemCount.next(result.length)
    })
  }

  //removecart item api
  removeCartItem(id:any){
    //api call
    return this.http.delete(`${this.BASE_URL}/cart/item/${id}`,this.appendtoken())

  }

  //increment cart item
  incrCartItem(id:any){
    //api call
    return this.http.get(`${this.BASE_URL}/cart/increment-item/${id}`,this.appendtoken())

  }

   //decrement cart item
   decrCartItem(id:any){
    //api call
    return this.http.get(`${this.BASE_URL}/cart/decrement-item/${id}`,this.appendtoken())

  }

  //empty cart
  emptyCart(){
      //api call
      return this.http.delete(`${this.BASE_URL}/cart/empty-cart`,this.appendtoken())
     }
      //Student login api call
      login(email:any,password:any){
        const body = {
          email,
          password
        }
        //server call-
        return this.http.post(`${this.BASE_URL}/products/login`,body)
         }
    
         //register call
         register(username:any,email:any,password:any){
          const body={
            username,
            email,
            password
          }
          return this.http.post(`${this.BASE_URL}/products/register`,body)
         }
      

}
