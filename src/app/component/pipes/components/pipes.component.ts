import { Component } from '@angular/core';
import { Book } from '../model/pipesType';
import { CurrencyPipe, AsyncPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  book: Book = {
    id: 1,
    title: 'Angular',
    price: 100,
    page: 200,
    data: new Date()
  }
}
