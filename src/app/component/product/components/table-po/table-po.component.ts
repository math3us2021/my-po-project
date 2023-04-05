import { Component, ViewChild } from '@angular/core';
import { Product } from '../../model/productType';
import { PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

interface CustomPoTableAction extends PoTableAction {
  edit?: boolean;
}

@Component({
  selector: 'app-table-po',
  templateUrl: './table-po.component.html',
  styleUrls: ['./table-po.component.css']
})
export class TablePoComponent {
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent | undefined;
  items: Array<Product> = [];
  columns: Array<PoTableColumn> = [
    { property: 'id', label: 'ID', type: 'number', width: '10%', visible: false },
    { property: 'description', label: 'Description'},
    { property: 'price', label: 'Price',   },
    { property: 'active',
      label: 'Ativo/Iativo',
      type: 'boolean',
      // width: '10%',
      visible: true,
      action: (item: Product) => this.editProduct(item),
      icons: [
        { value: "true", icon: 'po-icon po-icon-ok', color: 'color-07', tooltip: 'Ativo' },
        { value: "false", icon: 'po-icon po-icon-close', color: 'color-11', tooltip: 'Inativo' },
      ],




    }
  ]
  actions: Array<CustomPoTableAction> = [
    {
      action: (item:Product)=> this.deleteProduct(item),
      icon: 'po-icon po-icon-delete',
      label: 'Deletar',
      // edit: true
    },
    {
      action: (item: Product)=> this.editProduct(item),
      icon: 'po-icon po-icon-edit',
      label: 'Editar',
      // edit: false
    },
  ]

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router,

  ) {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.items = products;
    });
  }

  deleteProduct(event: Product) {
    console.log('action deleteProduct', event.id);
    this.productService.deleteProduct(event.id as number).subscribe((res: any) => {
      console.log(res);
      this.poTable?.removeItem(event);
    });

  }

  editProduct(event: Product) {
    this.router.navigate([`/product/update/${event.id}`]);
    // this.router.navigate(["/product/update"]);
  }

  errorHandler(error: any): any {
    throw new Error('Method not implemented.');
  }


  onCollapseDetail() {
    console.log('onCollapseDetail');
  }

  onExpandDetail() {
    console.log('onExpandDetail');
  }

  sumTotal(event: any) {
    console.log(event);
  }

  decreaseTotal(event: any) {
    console.log(event);
  }

  changeColumnVisible(event: any) {
    console.log(event);
  }

  restoreColumn() {
    console.log('action restoreColumn');
  }
}
