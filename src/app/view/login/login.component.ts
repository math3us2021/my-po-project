import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  constructor(
    private router: Router,
    private authService: LoginService,
    private poAlert: PoDialogService) { }
  // menuChange: boolean = false;

  ngOnInit() {
    // this.authService.authAuthenticated.subscribe((menuChange: boolean) => {});
  }
  login(){
    this.authService.authAuthenticated();
  }

  openDialog(){
    // this.poAlert.alert({
    //   title: 'Sent with success!',
    //   message: `Seja bem vindo Mr(s). ${this.getNameEmail()}`
    // });
    this.authService.authAuthenticated();
  }

  private getNameEmail() {
    const index = this.email.indexOf('@');
    return this.email.substring(0,1).toLocaleUpperCase() + this.email.substring(1, index);
  }
}
