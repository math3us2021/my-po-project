import { Component } from '@angular/core';
import { ProductService } from 'src/app/component/product/services/product.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  data = [];
constructor(private serviceProduto:ProductService ){}

  ngOnInit(): void {
    this.serviceProduto.getPeople().subscribe(products => {
      this.data = products
    })
  }

rowActions = {
  beforeSave: this.onBeforeSave.bind(this),
  // afterSave: this.onAfterSave.bind(this),
  // beforeRemove: this.onBeforeRemove.bind(this),
  // afterRemove: this.onAfterRemove.bind(this),
  // beforeInsert: this.onBeforeInsert.bind(this)
};

columns = [
  { property: 'id', label: 'Código', align: 'center', readonly: true, freeze: true},
  { property: 'name', label: 'Nome', width: '500px',  align: 'center', required: true },
  { property: 'cpf', label: 'CPF', width: '50px', required: true },
  { property: 'age', label: 'Age', align: 'center', width: 80 },
];

onBeforeSave(row: any, old: any) {
  return row.occupation !== 'Engineer';
}

// onAfterSave(row) {
//   // console.log('onAfterSave(new): ', row);
// }

// onBeforeRemove(row) {
//   // console.log('onBeforeRemove: ', row);

//   return true;
// }

// onAfterRemove(row) {
//   // console.log('onAfterRemove: ', row);
// }

// onBeforeInsert(row) {
//   // console.log('onBeforeInsert: ', row);

//   return true;
// }

}
