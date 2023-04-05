import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormLoad,
  PoDynamicFormValidation,
  PoNotificationService,
  PoSwitchComponent,
} from '@po-ui/ng-components';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/productType';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  // @ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;
  person  = {} ///aqui carrega os dados do banco de dados


  validateFields: Array<string> = ['description', 'price', ]; //aqui carrega os campos que serão validados

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
      // required: true,
      label: 'Itivo/Inativo',
      gridColumns: 1,
      type: 'boolean',
      booleanTrue: 'Ativo',
      booleanFalse: 'Inativo',
      // formatModel: true,
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
    },
  ];

  constructor(
    public poNotification: PoNotificationService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getByIdProducts(Number(id)).subscribe((res: Product) => {
    console.log("🚀 ~ file: product-update.component.ts:72 ~ ProductUpdateComponent ~ this.productService.getByIdProducts ~ res:", res)
    this.person = {
      id: res.id,
      description: res.description,
      price: res.price,
      active: res.active,
    }
    });

  }

  onChangeFields(
    changedValue: PoDynamicFormFieldChanged
  ): PoDynamicFormValidation {
    if (changedValue.property === 'description') {
      return {
        value: changedValue.value,
        fields: [
          {
            property: 'description',
            minLength: 3,
          },
        ],
        focus: 'price',
      };
    }
    if (changedValue.property === 'price') {
      return {
        value: changedValue.value,
        fields: [
          {
            property: 'price',
            minLength: 1,
          },
        ],
        focus: 'status',
      };
    }
    return {
      value: changedValue.value,
      fields: [],
      focus: undefined,
    };
  }

  onLoadFields(): PoDynamicFormLoad { //alterar ou incluir campos dinamicamente no formulário
    // return this.registerService.getUserDocument(value);
    console.log(
      '🚀 ~ file: product-update.component.ts:125 ~ SamplePoDynamic ~ onLoadFields ~ this.person',
      this.person
    );
    return {
      fields: [
        // {
        //   property: 'description',
        //   label: 'Descrição',
        //   divider: 'PERSONAL DATA',
        //   required: true,
        // },
      ],
    };
  }

  dataSave(value: Product) {

    //aqui salva os dados no banco de dados
    console.log(
      '🚀 ~ file: register.component.ts:125 ~ SamplePoDynamic ~ dataSave ~ value:',
      value
    );
    this.productService.updateProduct(value).subscribe(() => {
      this.poNotification.success('Produto cadastrado com sucesso!');
      this.router.navigate(['/product']);
    });
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
