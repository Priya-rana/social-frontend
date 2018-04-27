import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {

  categories;
  constructor(private service : CategoryService) { }

  ngOnInit() {
    this.service.get().subscribe(categoryObject => {
      this.categories = categoryObject;
    });
  }

  delete(category) {
    if(confirm("Are you sure to delete " + category.name)) {
      this.service.delete(category.id).subscribe(
        response => {
          let index = this.categories.indexOf(category);
          this.categories.splice(index,1);
        }
      );
    }
  }

}
