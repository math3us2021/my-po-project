import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetalsComponent } from './components/course/course-detals/course-detals.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { CourseRoutingModule } from './course-routing.module';
import { RouterModule } from '@angular/router';
import { CourseServiceService } from './services/course-service.service';
import { PoModule } from '@po-ui/ng-components';
import { CourseComponent } from './components/course/course.component';
import { CoursesGuards } from './guard/courses.guard';


@NgModule({
  declarations: [
    CourseComponent,
    CourseDetalsComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    RouterModule,
    PoModule,
  ],
  providers: [CourseServiceService, CoursesGuards],
})
export class CourseModule { }
