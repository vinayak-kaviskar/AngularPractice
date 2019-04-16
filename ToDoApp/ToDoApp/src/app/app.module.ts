import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {MYROUTES} from './app.route';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    RouterModule.forRoot(MYROUTES)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



