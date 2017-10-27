import { BrowserModule } from '@angular/platform-browser';
import {UsersService} from './users.service';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
// importing modules for social login
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

// import all the components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BillComponent } from './bill/bill.component';
import { FooterComponent } from './footer/footer.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("713968293746-gujmfceplcphvoc32s18i3bd2fb4esc8.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);

const routes: Routes=[
  { path: 'Home', component: HomeComponent},
  { path: 'Signup', component: SignupComponent},
  { path: 'Login', component: LoginComponent},
  {path: 'Product', component: ProductComponent},
  {path: 'Bill', component: BillComponent}
  //{ path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    BillComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,SocialLoginModule.initialize(config)

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
