import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ScreenComponent } from './screen.component';
import { LoginpageComponent } from '../loginpage/loginpage.component';


export const routes:Routes=[


{path:'login',component:LoginpageComponent},
{path:'screens',component:ScreenComponent,

children:[
        {path:'app-dashboard',loadChildren:'../dashboard/dashboard.module#DashboardModule'},
        {path:'app-map-component',loadChildren:'../map-component/map-component.module#MapModule'},
        


]


}







];
export const routing:ModuleWithProviders=RouterModule.forChild(routes);