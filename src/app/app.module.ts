import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { HeaderComponent } from './component/template/header/header.component';


import { PeopleModuleModule } from './component/people/people-module.module';
import { ProductModule } from './component/product/product.module';
import { LoginService } from './view/login/login.service';
import { AuthGuardService } from './guard/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,

    // CourseComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    FormsModule,
    PeopleModuleModule,
    ProductModule,

    // CourseModule,

  ],
  providers: [LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
