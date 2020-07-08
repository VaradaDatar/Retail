import {Product} from './product.model';
import { Component, EventEmitter, Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductServices
{

    products : Product[] =
  [
      new Product('Zudio','Women top','assets/banner1.jpg',800),  //object create
      new Product('Max','Women top','assets/product2.jpg',500),
      new Product('Max','Women top','assets/top.jpg',500),
      new Product('Pantaloons','Women sleeves','assets/product1.jpg',500),
      new Product('USpolo','polos','assets/polo1.jpg',800),  //object create
      new Product('Maxpolo','polo','assets/polo2.jpg',500),
      new Product('USpolo','polo','assets/polo3.jpg',500),
      new Product('Pumapolo','polos','assets/polo4.jpg',500),
      new Product('Puma','Mens running shoes','assets/shoes1.jpg',800),  //object create
      new Product('Nike','Mens running shoes','assets/shoes.jpg',500),
      new Product('Addidas','Mens regular','assets/shoes2.jpg',500),
      new Product('Nike','Mens sports','assets/shoes3.jpg',500)
  ]; 
  
        constructor(private http:HttpClient)
    {

    }
  

    getProduct()
    {
        return this.products.slice();
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
    // }

}