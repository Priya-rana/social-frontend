import { Component, OnInit, group } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Group } from './group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group-list.component.html'
})
export class GroupListComponent implements OnInit {

  groups;
  constructor(private service : GroupService) { }

  ngOnInit() {
    this.service.get().subscribe(groupObj => this.groups = groupObj );
  }

  delete(group){
    if(confirm("Are you sure to delete " + group.group_url  )) {
      this.service.delete(group.id).subscribe(
        response => {
          let index = this.groups.indexOf(group);
          this.groups.splice(index,1);
        }
      );
    }
  }
  }

