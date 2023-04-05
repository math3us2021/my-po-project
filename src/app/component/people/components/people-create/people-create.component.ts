import { Component } from '@angular/core';
import { Product } from '../../../product/model/productType';
import { PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { PoDynamicFormRegisterService } from 'src/app/view/home/po-dynamic-form-register.service';
import { ProductService } from 'src/app/component/product/services/product.service';
import { People } from '../../model/peopleType';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent {

  person = {}; ///aqui carrega os dados do banco de dados
  validateFields: Array<string> = [
    'name',
    'cpf',
    'age'

  ]; //aqui carrega os campos que serão validados

  fields: Array<PoDynamicFormField> = [ //aqui carrega os campos que serão exibidos e seus atributos. pode também carregar os dados do banco de dados. e as validações também
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      // minLength: 3,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Nome'
    },
    {
      property: 'cpf',
      required: true,
      label: 'CPF',
      mask: '999.999.999-99',
      gridColumns: 3,
      gridSmColumns: 12
    },


    {
      property: 'age',
      required: true,
      label: 'Idade',
      mask: '99',
      gridColumns: 3,
      gridSmColumns: 12
    },
  ];

  constructor(public poNotification: PoNotificationService,
    public registerService: PoDynamicFormRegisterService,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() { //aqui carrega os dados do banco de dados
    // this.person = this.onLoadFields(this.person);

  }


  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation { //aqui carrega os campos que serão validados

    if (changedValue.property === 'name') {
      return {
        value: changedValue.value,
        fields: [
          {
            property: 'name',
            minLength: 4,
            maxLength: 50,

          },
          {
            property: 'cpf',
            minLength: 12,
          },
          {
            property: 'age',
            minLength: 2,
          }

        ],
        focus: ''
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

  dataSave(value: People) { //aqui salva os dados no banco de dados

    this.productService.createPeople(value).subscribe(() => {
      this.poNotification.success('Cadastro realizado com sucesso!');
      this.router.navigate(['/home']);
    });
  }
  cancel() {
    this.router.navigate(['/home']);
  }
}
