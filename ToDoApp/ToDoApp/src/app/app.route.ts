

import{Routes} from '@Angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AuthGuard } from './auth.guard';



export const MYROUTES:Routes=[

    {path:'' ,  component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignUpComponent},
    {path:'todolist',canActivate:[AuthGuard], component:ToDoListComponent},
    
    {path:'**' , pathMatch:'full', redirectTo:'login'},
    
  ];