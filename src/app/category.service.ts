import {Category} from './category.model';

import { Component, EventEmitter, Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class CategoryServices
{

    category : Category[] =
  [
      // new Category('Tops','Women wear','assets/top1.jpg'),  //object create
      // new Category('Jackets','Women wear','assets/top2.jpg'),
      // new Category('Dresses','Women wear','assets/top4.jpg'),
      // new Category('Kurtis','Women wear','assets/top5.jpg'),
      // new Category('Bags','Women swear','assets/bag.jpg'),  //object create
      // new Category('Footwear','Women wear','assets/shoes.jpg'),
      // new Category('Shorts','Women wear','assets/suit.jpg'),
      // new Category('Leggings','Women wear','assets/top.jpg'),
      // new Category('Jeans','Women wear','assets/top1.jpg'),  //object create
  //     new Category('','Mens running shoes','assets/shoes.jpg',500),
  //     new Category('Addidas','Mens regular','assets/shoes2.jpg',500),
  //     new Category('Nike','Mens sports','assets/shoes3.jpg',500)
   ]; 
  
   constructor(private http:HttpClient)
    {

    }
  

    getCategory()
    {
        return this.category.slice();
    }


    // fetchData()
    // {
    //     this.http.get<{[key:string]:Product}>("http://localhost:3006/api/product")
    // .pipe(map(responseData => {
    //     const postArray =[];
    //     for (const key in responseData)
    //     {
    //         if(responseData.hasOwnProperty(key))
    //         {
    //             postArray.push({...responseData[key],id:key})
    //         }
    //     }

    //     return postArray;

           
    // })).subscribe(posts =>{
    //     console.log("array"+posts);
  
    //    this.products = posts;
    //  })
   
    // ;
  //}

}