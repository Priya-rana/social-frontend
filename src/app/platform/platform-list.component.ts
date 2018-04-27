// Using Imput for two way binding for img_name input field
import { Component, OnInit  , Input } from '@angular/core';
import {PlatformService} from '../services/platform.service';
// For Getting Route Parameters
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform-list.component.html',
  // styleUrls: ['./platform-list.component.css']
})

export class PlatformListComponent implements OnInit {
  @Input() img_name: any;
  platforms;
  url;

  constructor(private route: ActivatedRoute,private service: PlatformService) { 
    
  }

  ngOnInit() {
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

  

  delete(platform) {
    if(confirm("Are you sure to delete " + platform.name)) {
      this.service.delete(platform.id).subscribe(
        response => {
          let index = this.platforms.indexOf(platform);
          this.platforms.splice(index,1);
        }
     ,
     (error) => console.log(error)
      );
    }
  }

}
