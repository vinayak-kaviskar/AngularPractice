import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [

  { path: 'login', loadChildren:'app/login/login.module#LoginModule'},
 // { path: 'modules', loadChildren: 'app/modules/modules.module#ModulesModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
