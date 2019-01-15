import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";



@Injectable()
export class ModulesGuard implements CanActivate
{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       

        return true;

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
      //  route.data('moduleName');
        return true;
        
    }

    
}