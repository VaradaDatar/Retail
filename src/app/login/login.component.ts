import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { throwError, BehaviorSubject } from 'rxjs';

import { Userlogin } from '../userlogin.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  ngOnInit() {

  }
  
  loginClicked(form:NgForm)
  {
    

    const user_email = form.value.email;
    const user_password = form.value.password;

    const login = { email :user_email,password:user_password};

    //alert(password);

    this.http.post('http://localhost:3005/api/signin',login).subscribe(responseData => {
      console.log(responseData);
      alert("welcome ,Shop Local");

    //   if(responseData.user.email)
    // {
    //     this.handleAuthentication(responseData.user.email,responseData.user._id,responseData.user.fullName,responseData.user.contact,responseData.user.purchases);
        
        this.router.navigate(['/main']);

      // } 
    })
    form.reset();
  }

  private handleAuthentication(
    email: string,
    userId: string,
    fullName: string,
    contact: string,
    purchases : string
  ) 
  {
   
    const user = new Userlogin(email, userId,fullName,contact,purchases);
    this.user.next(user);

    //localStorage.setItem('userData', JSON.stringify(user)); // option 1
    localStorage.setItem('user_email', email);  // option 2
    localStorage.setItem('user_name', fullName);  // option 3
    localStorage.setItem('user_id', userId);  // otpion 4
    localStorage.setItem('user_contact', contact); 
    localStorage.setItem('user_purchases', purchases); 
    //sessionStorage.setItem('user_name', fullName);
  }

}
