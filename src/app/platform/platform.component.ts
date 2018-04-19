import { Component, OnInit } from '@angular/core';
import {PlatformService} from '../services/platform.service';
// For Getting Route Parameters
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  platforms;
  url;

  constructor(private route: ActivatedRoute,private router: Router,private service: PlatformService) { 
    
  }

  ngOnInit() {

    this.url = this.router.url;

    this.service.get()
    .subscribe(
      platformObject => {
      this.platforms = platformObject;
      },
      error => {
      alert("An unxpected error");
      console.log(error);
     }
 
  )
 
  }

  createPlatform(postData){
    console.log(postData);
    // If there is no error in posted data 
    if(postData.valid){
      // Send Request To Server
      this.service.post(postData.value).subscribe(platformObject => {
        console.log(platformObject);
      });
    }
    
  }

}
