import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/view/home/home.component';
import { SamplePoDynamic } from './components/register/register.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { AuthGuardService } from 'src/app/guard/auth.guard';



const routesProduct: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    component: HomeComponent
  },

]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesProduct)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
