import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataBindingDeepDiveComponent } from './data-binding-deep-dive/data-binding-deep-dive.component';
import { AddNewServerComponent } from './data-binding-deep-dive/add-new-server/add-new-server.component';
import { ServerElementComponent } from './data-binding-deep-dive/server-element/server-element.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveApproachFormComponent } from './reactive-approach-form/reactive-approach-form.component';
import { PipePracticeComponent } from './pipe-practice/pipe-practice.component';
import { MyPipe } from './pipe-practice/my-pipe';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DataBindingDeepDiveComponent,
    AddNewServerComponent,
    ServerElementComponent,
    TemplateDrivenFormComponent,
    ReactiveApproachFormComponent,
    MyPipe,
    PipePracticeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
