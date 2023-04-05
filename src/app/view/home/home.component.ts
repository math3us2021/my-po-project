import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name : string = '';
  property: string = '';
  constructor(private router: Router) { }

  teste(){
    console.log(this.name);
    console.log(this.property);
  }

  createCourse(){
    this.router.navigate(['/courses']);
  }
  createProduct(){
    this.router.navigate(['/product/create']);
  }
  createPeople(){
    this.router.navigate(['/people']);
  }
}
