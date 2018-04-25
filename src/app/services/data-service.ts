import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class DataService {

  server_host: string = environment.server_host;
  private url : string;
    constructor(private apiPath: string,private http: HttpClient) { 
      this.url = this.server_host+this.apiPath;
    }
    
  get(){
    // This method return observable an observable of response
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