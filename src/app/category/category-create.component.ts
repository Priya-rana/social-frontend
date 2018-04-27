import { Component, OnInit , Input } from '@angular/core';
import {CategoryService} from '../services/category.service';
// For Getting Route Parameters
import { ActivatedRoute,Router} from '@angular/router';
 import { Category } from './category.model';


@Component({
    selector: 'app-category',
    templateUrl: './category-create.component.html',
  })

export class CategoryCreateComponent implements OnInit {
    @Input() img_name: any;
     category = new Category();
    
    constructor(private service: CategoryService,private route: ActivatedRoute,private router: Router){
        
    }
    
    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.service.get(id).subscribe((category : Category) => this.category = category );

    }

    createPlatform(postData){
    
        if((this.img_name))
        postData.value.img_name = this.img_name;
   
        this.service.post(postData.value).subscribe(
         (success) => {
            // Page redirect when getting response
            this.router.navigate(['/categoryList']);
            console.log(success);
        });
     }

     updatePlatform(postData){

        if((this.img_name))
        postData.value.img_name = this.img_name;
   
        this.service.put(postData.value).subscribe(
         (success) => {
            // Page redirect when getting response
            this.router.navigate(['/categoryList']);
            console.log(success);
        });

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