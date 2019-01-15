import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../authentication/auth.service';
import { AuthGuard } from '../authentication/auth.guard';
import { AppMaterialModule } from '../shared/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers: [ AuthGuard],
})
export class LoginModule { }
