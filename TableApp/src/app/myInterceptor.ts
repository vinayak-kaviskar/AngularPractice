
import {Injectable}from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import{HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';




@Injectable()

export class CCInterceptor implements HttpInterceptor{




    

    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        let request = req.clone({
            
            
            //headers:new HttpHeaders().append('api2_key','abcd')
            headers:req.headers.append('api2_key','abcd')


            
        });


      return  next.handle(request).do(

        (event:any)=>{console.log("In success")},
        (error:any)=>{
            console.log("Error occured in interceptor");
        });
       
        //throw new Error("Method not implemented.");

       
    }





    
}