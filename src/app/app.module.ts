import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlatformComponent } from './platform/platform.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';


@NgModule({
  declarations: [
    AppComponent,
    PlatformComponent,
    LeftNavBarComponent,
    FooterComponent,
    RightSidebarComponent,
    NavHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
