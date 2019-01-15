import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Screen2RoutingModule } from './screen2-routing.module';
import { Screen2Component } from './screen2.component';

@NgModule({
  imports: [
    CommonModule,
    Screen2RoutingModule
  ],
  declarations: [Screen2Component]
})
export class Screen2Module { }
