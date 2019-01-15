import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Screen2Component } from './screen2.component';

const routes: Routes = [

  {path:'',component:Screen2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Screen2RoutingModule { }
