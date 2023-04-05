import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { CourseDetalsComponent } from './components/course/course-detals/course-detals.component';

const course: Routes = [
  // {
  //   path: 'course',
  //   component: CourseComponent,
  // },
  {
    path: '', component: CourseComponent,
    children: [
      { path: ':id', component: CourseDetalsComponent },
      { path: ':id/edit', component: CourseFormComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(course)
  ],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
