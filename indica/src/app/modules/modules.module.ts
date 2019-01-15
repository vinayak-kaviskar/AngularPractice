import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { AppMaterialModule } from '../shared/app-material.module';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';


@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AppMaterialModule
    
  ],
  declarations: [ModulesComponent],
  
})
export class ModulesModule { }
