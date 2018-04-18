import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service';



@Injectable()
export class PlatformService extends DataService {

  constructor(http: HttpClient) {
    super('http://localhost:3000/api/platform',http);
   }

}
