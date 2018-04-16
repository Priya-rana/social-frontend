import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  platforms;

  constructor(http : HttpClient) { 
    http.get('http://localhost:3000/api/platform').subscribe(Response => {
      this.platforms = Response;
    })
  }

  ngOnInit() {
  }

}
