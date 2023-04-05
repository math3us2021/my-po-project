import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PoModule } from '@po-ui/ng-components';
import { ReadComponent } from './components/table/read.component';
import { PeopleCreateComponent } from './components/people-create/people-create.component';

@NgModule({
  declarations: [
    ReadComponent,
    PeopleCreateComponent,
  ],
  imports: [
    CommonModule,
    PoModule,
  ],
  exports:[
    ReadComponent,
    PeopleCreateComponent,
  ],
  providers: [],/// o provaider é o que vai ser injetado nos componente desse modulo, como exemplo o service
})
export class PeopleModuleModule { }
