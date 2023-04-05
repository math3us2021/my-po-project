import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleModule } from './people-module.module';
import { PeopleCreateComponent } from './components/people-create/people-create.component';


const routes: Routes = [
  {
    path: '',
    component: PeopleCreateComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingPeopleModule { }
