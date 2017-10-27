import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private userService:UsersService, private location:Location ) { }
  private cartProducts: any[];
  private total=0;
  ngOnInit() {
    
      this.userService.getProductsFromCart().subscribe(items=>{this.cartProducts=items;this.calcTotal();});
      
      }
      goBack(): void {
        this.location.back();
      }
   calcTotal(){
     
     for(var i=0;i<this.cartProducts.length; i++)
     {
       this.total+=this.cartProducts[i].subtotal;
     }
          
   }
}
