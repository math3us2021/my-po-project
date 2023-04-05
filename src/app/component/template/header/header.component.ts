import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/view/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // menuChange: boolean = false;

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
