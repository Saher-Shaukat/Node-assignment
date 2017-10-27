import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  allUsers: any[];
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(private userService: UsersService ,private router:Router,private authService: AuthService) { }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }
  authenticate(username,password){
      this.userService.getUserData().subscribe(data=>{
        this.allUsers=data;
        for(var i=0;i<this.allUsers.length;i++){
          if(this.allUsers[i].emailId == username && this.allUsers[i].password == password){
              this.router.navigate(['/Product']);
              this.userService.toggle=false;
              this.userService.user=this.allUsers[i].firstName;
              this.userService.loggedInUser=this.allUsers[i].emailId;
              break;
          }
          if(i==this.allUsers.length-1)
              alert("Invalid credentials: Sign up if not a member");
      }
      
      });
     
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }

}
