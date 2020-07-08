import { Component, OnInit } from '@angular/core';
import { Userlogin } from '../userlogin.model';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);

  username : string;
  contact : string;
  email : string;
  constructor(private productServi :ProductServices,private http: HttpClient, private router: Router) { }

  session_set = false;
  category : Category[];
  ngOnInit(): void {

    this.username = localStorage.getItem("user_name");
    this.contact = localStorage.getItem("user_contact");
    this.email = localStorage.getItem("user_email");
    this.session_set = true;

    
    
    
    this.http.get<{[key:string]:Product}>("http://localhost:3005/api/categories")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;

           
    })).subscribe(category =>{
        //console.log("category "+category);
        this.category = category;
       //this.products = posts;
     })
   
    ;

  }

}
