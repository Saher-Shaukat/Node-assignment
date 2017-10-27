import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from  '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: any[];
  private cartProducts: any[];
  constructor(private userService:UsersService, private route: Router) { }

  ngOnInit() {
    this.userService.getProducts().subscribe(items=>{this.products=items});
     
  }
  addToCart(product){
   
    var qty=(<HTMLInputElement>document.getElementById("qty"+product.productId)).value;
    var body = {qty: qty, userName: this.userService.loggedInUser,createdAt:Date.now(),img: product.img, productName:product.name, price: product.price, description: product.description};
    this.userService.addProductToCart(body);
      
           
  }
  getcart(){
    this.userService.getProductsFromCart().subscribe(items=>{this.cartProducts=items;});
    }
    bill(){
      this.route.navigate(['/Bill']);
    }
    
    deleteProductFromCart(product){
     this.userService.deleteProductFromCart(product.createdAt);

    }
  
}
