import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  signup(first,last,dob,gender,phone,email,password){
    
        var body= {
          firstName: first,
          lastName: last,
          gender: gender,
          emailId:email,
          dob:dob,
          password:password,
          phoneNumber:phone
        };
        this.userService.createUser(body);
        alert("Signup Successful");
        
  }

}
