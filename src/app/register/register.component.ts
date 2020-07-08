import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  constructor(private productService :ProductServices,private http:HttpClient) { }

  ngOnInit(): void {
  }
  
  register(form) {
    console.log(form.value);
    console.log(form.touched);
    console.log(form.submitted);   
  }
  onCreatePost(postData: { fullName: string; contact: number, email: string; password: string, })
  {

    console.log(postData);

    this.http .post('http://localhost:3005/api/signup',postData).subscribe(responseData => {
        console.log(responseData);
        alert("welcome account is created");
      });

  }

}