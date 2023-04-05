import { Component, EventEmitter, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { LoginService } from './view/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu: boolean = false;

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  constructor(
  
    private menu: LoginService,
  ) { }

  private onClick() {
    alert('Clicked in menu item')
  }

  ngOnInit() {
    this.menu.menuEmitter.subscribe((menu) => {
      this.showMenu = menu;
    });
  }
}
