import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: LoginService) { }
  // menuChange: boolean = false;

  ngOnInit() {
    // this.authService.authAuthenticated.subscribe((menuChange: boolean) => {});
  }
  login(){
    this.authService.authAuthenticated();
  }
}
