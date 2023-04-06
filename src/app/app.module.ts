import { LOCALE_ID, NgModule } from '@angular/core';
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


import { ProductModule } from './component/product/product.module';
import { LoginService } from './view/login/login.service';
import { AuthGuardService } from './guard/auth.guard';
import { PeopleModule } from './component/people/people-module.module';
import { NotPageComponent } from './component/notPage/components/not-page/not-page.component';
import { PipesModule } from './component/pipes/pipes.module';
import { TranslocoRootModule } from './transloco-root.module';
// import { CoursesGuards } from './component/course/guard/courses.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    NotPageComponent,

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
    PeopleModule,
    ProductModule,
    PipesModule,
    TranslocoRootModule

    // CourseModule,

  ],
  providers: [
    LoginService,
    AuthGuardService,
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
