import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { AuthGuard } from '../authentication/auth.guard';

const routes: Routes = [

    {path:'modules', canActivate:[AuthGuard],   component:ModulesComponent,
    children:[
      {path:'screen1', canActivateChild:[AuthGuard], loadChildren:'app/modules/screen1/screen1.module#Screen1Module',data:{moduleName:'screen1'}},
      {path:'screen2',canActivateChild:[AuthGuard], loadChildren:'app/modules/screen2/screen2.module#Screen2Module',data:{moduleName:'screen2'}},
      {path:'',redirectTo:'screen1',pathMatch:'full'},
      {path:'**',redirectTo:'login',pathMatch:'full'}


    ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
