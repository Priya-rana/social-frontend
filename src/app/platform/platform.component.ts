// Using Imput for two way binding for img_name input field
import { Component, OnInit ,ElementRef , Input } from '@angular/core';
import {PlatformService} from '../services/platform.service';
// For Getting Route Parameters
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  @Input() img_name: any;
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
    
     if((this.img_name))
     postData.value.img_name = this.img_name;

     this.service.post(postData.value).subscribe(
      (success) => {
         // Page redirect when getting response
         this.router.navigate(['/platform']);
         console.log(success);
     },
     (error) => console.log(error));
  }


  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.img_name = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  delete(id: number) {
    if(confirm("Are you sure to delete "+id)) {
      console.log("Implement delete functionality here");
    }
  }

}
