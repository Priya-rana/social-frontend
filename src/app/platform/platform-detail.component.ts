import { Component, OnInit , Input } from '@angular/core';
import {PlatformService} from '../services/platform.service';
// For Getting Route Parameters
import { ActivatedRoute,Router} from '@angular/router';
import { Platform } from './platform.model';


@Component({
    selector: 'app-platform',
    templateUrl: './platform-detail.component.html',
  })

export class PlatformDetailComponent implements OnInit {
    @Input() img_name: any;
    platform = new Platform();
    
    constructor(private service: PlatformService,private route: ActivatedRoute,private router: Router){
        
    }
    
    ngOnInit() {
         const id = +this.route.snapshot.params["id"];
        // console.log(id);
        this.service.get(id).subscribe((platform : Platform) => this.platform = platform );

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

     updatePlatform(postData){

        if((this.img_name))
        postData.value.img_name = this.img_name;
   
        this.service.put(postData.value).subscribe(
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

}