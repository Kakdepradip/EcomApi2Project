import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
})
export class SellerAuth implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    
  }
  signUp(data:object):void{
    console.log(data)
  }

}
