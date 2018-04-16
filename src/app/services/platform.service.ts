import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlatformService {

  private url = 'http://localhost:3000/api/platform';

  constructor(private http: HttpClient) { }

  getPlatforms(){
    // This method return observable an observable of response
    return this.http.get(this.url);
  }
 

}
