import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isLoggedIn.pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          console.log(isLoggedIn)
          if (!isLoggedIn) {
            this.router.navigate(['/login']);
            console.log("guard return false")
            return false;
          }
          console.log("guard return true")
          return true;
        })
      );
  } */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("value in guard"+this.authService.myLoggedInFlag());
      sessionStorage.getItem("loggedInFlag")

      if(sessionStorage.getItem("loggedInFlag")==="true")
      {
        console.log("loggin in cache:"+sessionStorage.getItem("loggedInFlag"));
        return true;
      }
      
      else{
        console.log("loggin in cache:"+sessionStorage.getItem("loggedInFlag"));
        this.router.navigate(['/login']);
        return false;
      }
      
     // return this.authService.myLoggedInFlag();

    }

  

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  let moduleName  =  route.data['moduleName'];

   var componentsList:String;
   componentsList =  sessionStorage.getItem('components');
   var componentsListArray:String[] = componentsList.split(',');
   console.log("string to array is");
   console.log(componentsListArray);
   console.log("Components luist in guard is:")
   console.log(componentsList);
   console.log("Selected component name is: "+ moduleName);

   var index:number = componentsListArray.indexOf(moduleName);
   if(index>-1)
   {
     console.log("permission for this module is present:"+index);
     return true;
   }
   else{
     console.log("permission for this module is not present:"+index);
     return false;
   }
  
   // return this.canActivate(route,state);
  }
}
