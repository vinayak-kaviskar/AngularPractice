import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './shared/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './authentication/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationInterceptor } from './shared/application-interceptor';
import {  HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModulesModule } from './modules/modules.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModulesModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
 // providers: [{provide:HTTP_INTERCEPTORS,useClass:CCInterceptor,multi:true}],
  providers: [AuthService, AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:ApplicationInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
