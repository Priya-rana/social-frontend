import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {URLSearchParams} from '@angular/http';
import { Component, OnInit  } from '@angular/core';



@Injectable()
export class DataService {

  server_host: string = environment.server_host;
  private url : string;
    constructor(private apiPath: string,private http: HttpClient) { 
      this.url = this.server_host+this.apiPath;
      //  this.route.params.subscribe( params => console.log(params) );
      //  this.route.params.subscribe( params => console.log(params) );
    }

    
  get(param?: number) {

    
    //  this.route.snapshot.params.param1;
        //  const id = +this.route.snapshot.params["id"];
        // console.log(id);
    // This method return observable an observable of response
    if(param){
      this.url = this.url+'/'+param;
    }
    return this.http.get(this.url);
  }

  post(resource){
    //   return Observable.throw(new AppError);
    return this.http.post(this.url,resource);
  }

  
  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }

  put(resource) {
    return this.http.put(this.url + '/' + resource.id, resource);
  }

}