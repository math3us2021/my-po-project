import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent {

  data = [];
  constructor(private serviceProduto:ProductService ){}

    ngOnInit(): void {
      this.serviceProduto.getProducts().subscribe(products => {
        this.data = products
      })
    }

  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),

  };

  columns = [
    { property: 'id', label: 'Código', align: 'center', readonly: true, freeze: true},
    { property: 'description', label: 'Nome', width: '200px',  align: 'center', required: true },
    { property: 'price', label: 'Price', align: 'center', width: 80 },
  ];

  onBeforeSave(row: any, old: any) {
    return row.occupation !== 'Engineer';
  }

}
