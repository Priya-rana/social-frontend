import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Add Form Module
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { PlatformListComponent } from './platform/platform-list.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CategoryComponent } from './category/category.component';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { PlatformService } from './services/platform.service';
import { CategoryService } from './services/category.service';
import { PlatformDetailComponent } from './platform/platform-detail.component';

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
    path:'category',
    component:CategoryComponent
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
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlatformService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
