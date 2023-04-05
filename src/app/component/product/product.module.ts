import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './app-routing-product.module';

import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { SamplePoDynamic } from './components/register/register.component';
import { TablePoComponent } from './components/table-po/table-po.component';
import { TableProductComponent } from './components/table-product/table-product.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    ProductUpdateComponent,
    SamplePoDynamic,
    TablePoComponent,
    TableProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    PoModule,
    RouterModule,
    PoTemplatesModule,
  ],
  exports: [
    ProductUpdateComponent,
    SamplePoDynamic,
    TablePoComponent,
    TableProductComponent
  ],
})
export class ProductModule { }
