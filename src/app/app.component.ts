import { Component, EventEmitter, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { LoginService } from './view/login/login.service';

import { translate, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMenu: boolean = true;
  // showMenu: boolean = false;
  buttonNamr = translate('hello');

  activeLang: string;
  availableLangs: Array<string> | { id: string; label: string }[];

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
  ];

  constructor(private traslo: TranslocoService, private menu: LoginService) {
    this.activeLang = this.traslo.getActiveLang();
    this.availableLangs = this.traslo.getAvailableLangs();
  }

  ngOnInit() {
    this.menu.menuEmitter.subscribe((menu) => {
      this.showMenu = menu;
    });
    // this.activeLangs = this.traslo.getActiveLang();
  }

  translo(lang: string) {
    this.traslo.setActiveLang(lang);
    this.activeLang = lang;
  }

  private onClick() {
    alert('Clicked in menu item');
  }

}
