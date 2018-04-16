import { Component, OnInit } from '@angular/core';
import {PlatformService} from '../services/platform.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  platforms;

  constructor(private service: PlatformService) { 
  }

  ngOnInit() {
    console.log("COmes here");
    this.service.getPlatforms()
    .subscribe(
      Response => {
      this.platforms = Response;
      }
  )
 
  }

}
