import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { PeopleCreateComponent } from './component/people/components/people-create/people-create.component';
import { AuthGuardService } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses',
  canActivate: [AuthGuardService],
  loadChildren: () => import('./component/course/course.module').then(m => m.CourseModule) },
  {
    path: 'people',
    canActivate: [AuthGuardService],
    component: PeopleCreateComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
