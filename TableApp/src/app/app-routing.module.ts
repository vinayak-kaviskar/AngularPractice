import {NgModule}from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { MapComponentComponent } from './map-component/map-component.component';
import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';

import{DashboardComponent} from './dashboard/dashboard.component'
import { SassTestComponent } from './sass-test/sass-test.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes :Routes = [
    {path:'login',component:LoginpageComponent},
    {path:'map-component', component:MapComponentComponent},
    /* {path:'',component:AppComponent}, */
    {path:'tableview',component:TableViewComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'sassScreen',component:SassTestComponent},
    /* {path:'',component:LoginpageComponent}, */
    
    { path: '**', redirectTo: 'login' }

];



@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class ApproutingModule{}