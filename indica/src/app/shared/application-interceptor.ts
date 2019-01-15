
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';


@Injectable()

export class ApplicationInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let request = req.clone({

            headers: req.headers.append('Content-Type', 'application/json').
                                 append('api_key','OURKEY').
                                 append('Cache-control', 'no-cache').
                                 append('Cache-control', 'no-store').
                                 append('Expires', '0').
                                 append('Pragma', 'no-cache')
        
        });

        return next.handle(request).do(

            (event: any) => { console.log("In success") },
            (error: any) => {
                console.log("Error occured in interceptor");
            });

        //throw new Error("Method not implemented.");

    }

}