import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PipesComponent } from "./components/pipes.component";


const routesProduct: Routes = [
  {
    path: 'pipes',
    // canActivate: [AuthGuardService],
    component: PipesComponent
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
export class PipesRoutingModule { }
