import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Seller {
  constructor(){
    
  }
  userSignUp(){
    console.log("service call")
  }
  
}
