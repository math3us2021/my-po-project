import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userAuthenticated: boolean = false;
  menuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  authAuthenticated(
    ///poderia passar o usuário e a senha
  ){
    ///if para acessar o banco de dados for igual ao do banco de dados
    this.userAuthenticated = true;
    this.menuEmitter.emit(true);
    this.router.navigate(['/home']);
  }

  userAuth(){
    return this.userAuthenticated;
  }
}
