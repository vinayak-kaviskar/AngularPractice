import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Screen1RoutingModule } from './screen1-routing.module';
import { Screen1Component } from './screen1.component';
import {  HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    Screen1RoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [Screen1Component]
})
export class Screen1Module { }
