import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

    constructor(private url: string,private http: HttpClient) { }
    
  get(){
    // This method return observable an observable of response
    return this.http.get(this.url);
  }

  post(resource){
    //   return Observable.throw(new AppError);
    return this.http.post(this.url,resource);
  }

}