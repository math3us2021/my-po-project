import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/view/login/login.service';

import { translate, TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // menuChange: boolean = false;
  setting = translate('setting.title');

action = [
    { label: translate('linguagem'), action: this.toggleMenu.bind(this) },
    { label: translate('setting.exit'), action: this.toggleMenu.bind(this) },
]
  constructor(
    private menu: LoginService,
    private router: Router,
  ) { }


  toggleMenu() {
    console.log('toggleMenu');
    this.menu.menuEmitter.emit(false);
    this.router.navigate(['']);
  }
}
