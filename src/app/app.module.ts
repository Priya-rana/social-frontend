import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ErrorHandler} from '@angular/core';
// Add Form Module
import { FormsModule } from '@angular/forms'; 
import { AppErrorHandler } from './common/app-error-handler';



import { AppComponent } from './app.component';
import { PlatformListComponent } from './platform/platform-list.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { PlatformService } from './services/platform.service';
import { CategoryService } from './services/category.service';
import { PlatformDetailComponent } from './platform/platform-detail.component';
import { CategoryListComponent } from './category/category-list.component';
import { CategoryCreateComponent } from './category/category-create.component';
import { GroupListComponent } from './group/group-list.component';
import { GroupService } from './services/group.service';
import { GroupCreateComponent } from './group/group-create.component';


const appRoutes: Routes = [
  {
    path:'createPlatform/:id',
    component:PlatformDetailComponent
  },
  {
    path:'createPlatform',
    component:PlatformDetailComponent
  },
  {
    path:'platform',
    component:PlatformListComponent
  },
  {
    path:'categoryList',
    component:CategoryListComponent
  },
  {
    path:'createCategory/:id',
    component:CategoryCreateComponent
  },
  {
    path:'createCategory',
    component:CategoryCreateComponent
  },
  {
    path:'groupList',
    component:GroupListComponent
  },
  {
    path:'createGroup/:id',
    component:GroupCreateComponent
  },
  {
    path:'createGroup',
    component:GroupCreateComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    PlatformListComponent,
    PlatformDetailComponent,
    LeftNavBarComponent,
    FooterComponent,
    RightSidebarComponent,
    NavHeaderComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    GroupListComponent,
    GroupCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlatformService,
    CategoryService,
    GroupService
    // {provide: ErrorHandler , useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
