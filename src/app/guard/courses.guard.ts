import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../view/login/login.service";
import { Observable } from "rxjs";

export class CoursesService implements CanActivate {

constructor(private authService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | boolean> {
    if(this.authService.userAuth()){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  } 

}
