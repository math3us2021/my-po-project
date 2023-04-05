import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "../../../view/login/login.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CoursesGuards implements CanActivateChild {

  constructor(private authService: LoginService, private router: Router) { }


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
      console.log(route)
      console.log(state)
      console.log("guards rota filha")
      // if(route.params['id']){ /// possivel passar role id para verificar se o usuario tem acesso
      //   alert('Usuário sem acesso')
      //   return false;
      // }
      return true;
  }


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Observable<boolean | boolean> {
  //   // if (this.authService.userAuth()) {
  //   //   return true;
  //   // } else {
  //   //   this.router.navigate(['']);
  //   //   return false;
  //   // }
  // // }
  // return true;
  // }
}
