import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


// Importing observable type on the top
import { Observable } from 'rxjs/Observable';
// Importing Catch(Operator) Variable on Observable
import 'rxjs/add/operator/catch';
// Importing Throw(Operator) Variable on Observable
import 'rxjs/add/observable/throw';

import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { AppError } from '../common/app-error';


@Injectable()
export class DataService {

  server_host: string = environment.server_host;
  private url : string;
    constructor(private apiPath: string,private http: HttpClient) { 
      this.url = this.server_host+this.apiPath;
    }

    
  get(param?: number) {
   
    // To Improve How to handle request with parameters
    let getUrl = this.url;
    if(param){
      getUrl = this.url+'/'+param;
    }
    return this.http.get(getUrl)
          .catch(this.handleError);
  }

  post(resource){
    return this.http.post(this.url,resource)
          .catch(this.handleError);
  }

  
  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .catch(this.handleError);
  }

  put(resource) {
    return this.http.put(this.url + '/' + resource.id, resource)
    .catch(this.handleError);
  }

  private handleError(error : Response){
    // Here we are returning different kind of error which 
    // is specific to our application
    //  Here we have to return observable that has 
    //  an error so for this we have to import observable type on the top
      if(error.status === 404)
        return Observable.throw(new NotFoundError(error));

      if(error.status === 400)
        return Observable.throw(new BadInput(error));
    
       return Observable.throw(new AppError(error));
}

}