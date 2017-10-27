import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UsersService {
 public user=""; // stores name of logged in user
 public loggedInUser=""; // stores emailId of logged in user
 toggle=true;

 headers: Headers;
 options: RequestOptions;
 constructor(private http: Http) { 
  this.headers = new Headers({ 'Content-Type': 'application/json', 
  'Accept': 'q=0.8;application/json;q=0.9' });
this.options = new RequestOptions({ headers: this.headers });
 }
  // getting the response in json format
getUserData(){
  return this.http.get('http://localhost:3000/getAllCustomers').map((res:Response)=>res.json());
}
createUser(user) {
  let body=user;
  return this.http.post('http://localhost:3000/addCustomer',body,this.options).toPromise()
        .catch(this.handleErrorPromise);
}
private handleErrorPromise (error: Response | any) {
  console.error(error.message || error);
  alert("signup unsuccessful");
	return Promise.reject(error.message || error);
    }	


getProducts(){
  return this.http.get('http://localhost:3000/product').map((res:Response)=>res.json());

}
changeNav(){
  return this.toggle;
}

getLoggedinUser(){
  return this.user;
}
getProductsFromCart(){
  var usr=this.loggedInUser;
  return this.http.get('http://localhost:3000/carts/'+ usr).map((res:Response)=>res.json());
 }
addProductToCart(product) {

  return this.http.post('http://localhost:3000/cart',product,this.options).toPromise()
  .catch(this.handleErrorPromise);;
}

deleteProductFromCart(orderId){
  //console.log(orderId);
  this.http.delete('http://localhost:3000/order/'+orderId).subscribe();

}

}

