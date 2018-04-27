import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {URLSearchParams} from '@angular/http';
import { Component, OnInit  } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';



@Injectable()
export class DataService {

  server_host: string = environment.server_host;
  private url : string;
    constructor(private apiPath: string,private http: HttpClient) { 
      this.url = this.server_host+this.apiPath;
    }

    
  get(param?: number) {
   
    let getUrl = this.url;
    if(param){
      getUrl = this.url+'/'+param;
    }
    return this.http.get(getUrl);
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