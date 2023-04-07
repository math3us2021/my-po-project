import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { PeopleCreateComponent } from './component/people/components/people-create/people-create.component';
import { AuthGuardService } from './guard/auth.guard';
import { NotPageComponent } from './component/notPage/components/not-page/not-page.component';
import { HomeComponent } from './view/home/home.component';
import { SamplePoDynamic } from './component/product/components/register/register.component';
import { ProductUpdateComponent } from './component/product/components/product-update/product-update.component';
// import { CoursesGuards } from './component/course/guard/courses.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    // canActivate: [AuthGuardService],
    component: HomeComponent
  },
  {
    path: 'courses',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./component/course/course.module').then(m => m.CourseModule)
  },
  {
    path: 'people',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./component/people/people-module.module').then(m => m.PeopleModule)
    // component: PeopleCreateComponent,
  },
  {
    path: 'product',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./component/product/product.module').then(m => m.ProductModule)
    // component: PeopleCreateComponent,
  },
  {
    path: 'product/create',
    canActivate: [AuthGuardService],
    component: SamplePoDynamic
  },
  {
    path: 'product/update/:id',
    canActivate: [AuthGuardService],
    component: ProductUpdateComponent
  },
  // {
  //   path: 'pipes',
  //   canActivate: [AuthGuardService],
  //   loadChildren: () => import('./component/pipes/pipes.module').then(m => m.PipesModule)
  // }

  // {
  //   path: '**',
  //   component: NotPageComponent,
  //   // component: NotPageModule,
  // },
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
