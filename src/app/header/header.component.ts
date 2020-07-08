import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Category } from '../category.model';
import {Subcat} from '../Subcat.model'
import { Userlogin } from '../userlogin.model';

import { throwError, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);

  username : string;
  constructor(private route: ActivatedRoute,private productServi :ProductServices,private http: HttpClient, private router: Router) { }

  session_set = false;
  li_items = [
    '5ef89cbcc26bc0087070e02e',
    '5ef89cd1c26bc0087070e02f',
    '5ef89cdfc26bc0087070e030'
  ];

  subcat1 : Subcat[];
  subcat2 : Subcat[];
  subcat3 : Subcat[];
  category:Category[];
  ngOnInit(): void {

    this.username = localStorage.getItem("user_name");
    this.session_set = true;

    
    this.http.get<{[key:string]:Product}>(" http://localhost:3005/api/category/sub/5ef89cbcc26bc0087070e02e")
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

           
    })).subscribe(subcat1 =>{
        //console.log("category "+category);
        this.subcat1 = subcat1;
       //this.products = posts;
     })
   
    ;

   
    this.http.get<{[key:string]:Product}>(" http://localhost:3005/api/category/sub/5ef89cd1c26bc0087070e02f")
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

           
    })).subscribe(subcat2 =>{
        //console.log("category "+category);
        this.subcat2 = subcat2;
       //this.products = posts;
     })
   
    ;
 
    this.http.get<{[key:string]:Product}>(" http://localhost:3005/api/category/sub/5ef89cdfc26bc0087070e030")
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

           
    })).subscribe(subcat3 =>{
        //console.log("category "+category);
        this.subcat3 = subcat3;
       //this.products = posts;
     })
   
    ;

    
      
    
    

  }


  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
   
    //localStorage.removeItem('userData');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_contact');
    localStorage.removeItem('user_purchases');

    //sessionStorage.removeItem('user_name');
    this.session_set = false;
  }

}

