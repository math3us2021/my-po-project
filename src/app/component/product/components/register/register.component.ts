// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   name : string = '';
//   property: string = '';
//   constructor(private router: Router) { }

//   teste(){
//     console.log(this.name);
//     console.log(this.property);
//   }

// }
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService
} from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { Product } from '../../model/productType';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'sample',
  templateUrl: './register.component.html',
})
export class SamplePoDynamic implements OnInit {
  outFather:string = 'coffe';
  beverage = ['coffe', 'tea', 'water', 'juice'];


  addBeverage(newBeverade: string){
    this.beverage.push(newBeverade);
    this.clearInput();
  }
  clearInput(){
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }


  person = {}; ///aqui carrega os dados do banco de dados
  validateFields: Array<string> = [
    'description',
    'price',
  ]; //aqui carrega os campos que serão validados

  fields: Array<PoDynamicFormField> = [
    {
      property: 'description',
      label: 'Descrição',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 5,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Descrição do produto',
    },

    {
      property: 'active',
      required: true,
      label: 'Itivo/Inativo',
      gridColumns: 1,
      type: 'boolean',
      booleanTrue: 'true',
      booleanFalse: 'false',
      formatModel: true
    },
    {
      property: 'price',
      label: 'Preço',
      gridColumns: 3,
      order: 2,
      type: 'currency',
      required: true,
      minLength: 1,
      maxLength: 10,
      placeholder: 'Preço do produto',
      gridSmColumns: 12,
      // suffix: 'R$',
    }



  ];

  constructor(public poNotification: PoNotificationService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() { //aqui carrega os dados do banco de dados
    // this.person = this.onLoadFields(this.person);
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {

    if (changedValue.property === 'description') {
      return {
        value: changedValue.value,
        fields: [
          {
            property: 'description',
            minLength: 3,
          }
        ],
        focus: 'price'
      };
    }
    if (changedValue.property === 'price') {
      return {
        value: changedValue.value,
        fields: [
          {
            property: 'price',
            minLength: 1,
          }
        ],
        focus: 'status'
      };
    }
    return {
      value: changedValue.value,
      fields: [],
      focus: undefined
     };
  }

  onLoadFields(value: any) { //aqui carrega os dados do banco de dados
    // return this.registerService.getUserDocument(value);
  }

  dataSave(value: Product) { //aqui salva os dados no banco de dados
    console.log("🚀 ~ file: register.component.ts:125 ~ SamplePoDynamic ~ dataSave ~ value:", value)
    this.productService.createProduct(value).subscribe(() => {
      this.poNotification.success('Produto cadastrado com sucesso!');
      this.router.navigate(['/home']);
    });
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
