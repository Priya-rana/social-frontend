import { Component, OnInit ,ElementRef } from '@angular/core';
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

  constructor(private route: ActivatedRoute,private router: Router,private service: PlatformService,private el: ElementRef) { 
    
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
    console.log(postData.value.photo = 'asasa');
    //locate the file element meant for the file upload.
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('photo', inputEl.files.item(0));
                postData.value.photo = inputEl.files.item(0);
            //call the angular http method
            this.service.post(postData.value).subscribe(
              (success) => {
                      console.log(success);
             },
             (error) => console.log(error));
                
          }
          formData.append('field', 'value');
          console.log(postData); 
       
    // console.log(formData);
    // If there is no error in posted data 
    // if(postData.valid){
    //   // Send Request To Server
    //   this.service.post(postData.value).subscribe(platformObject => {
    //     console.log(platformObject);
    //   });
    // }
    
  }

}
