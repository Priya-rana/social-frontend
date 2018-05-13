import { Component, OnInit, group } from '@angular/core';
import { GroupService } from '../services/group.service';
// For Getting Route Parameters
import { ActivatedRoute ,Router, Route} from '@angular/router';
import { Group } from './group.model';
import { PlatformService } from '../services/platform.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-group',
  templateUrl: './group-create.component.html'
})
export class GroupCreateComponent implements OnInit {

  group = new Group();
  platformList;
  categoryList;
  img_name: any;

  constructor(private service : GroupService,private platformService : PlatformService,private categoryService : CategoryService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if(id){
      this.service.get(id).subscribe(groupObj =>{
        groupObj.category_id = [];
        for(let i = 0 ; i<groupObj.group_relations.length;i++){
          groupObj.category_id.push(groupObj.group_relations[i]['category_id']);
        }
        this.group = groupObj;
      });
    }

    this.platformService.get().subscribe(platformObj => this.platformList = platformObj );
    this.categoryService.get().subscribe(categoryObj => this.categoryList = categoryObj );
  }

  onSubmitGroup(postData){
    if(this.route.snapshot.params["id"]){
      this.updateGroup(postData);
    }else{
      this.createGroup(postData);
    }
  }

  createGroup(postData){

    if((this.img_name))
        postData.value.img_name = this.img_name;

    this.service.post(postData.value).subscribe(
      (success) => {
         // Page redirect when getting response
         this.router.navigate(['/groupList']);
         console.log(success);
     });
  }

  updateGroup(postData){

    if((this.img_name))
        postData.value.img_name = this.img_name;

    this.service.put(postData.value).subscribe(
      (success) => {
         // Page redirect when getting response
         this.router.navigate(['/groupList']);
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
