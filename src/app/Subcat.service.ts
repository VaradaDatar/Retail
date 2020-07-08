import {Subcat} from './Subcat.model';

import { Component, EventEmitter, Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SubcatServices
{

    subcat : Subcat[] =
  [
    
   ]; 
  
   constructor(private http:HttpClient)
    {

    }
  

    getSubcat()
    {
        return this.subcat.slice();
    }


}