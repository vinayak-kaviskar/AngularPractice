import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import '../polyfills';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MdlPopoverModule } from '@angular-mdl/popover';
/* import {MdlMenuComponent}from '@angular-mdl/core/components/menu'; */

import { AgmCoreModule } from '@agm/core';
import { MdlModule, MdlSliderModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { HttpClientModule } from '@angular/common/http';
import {
  
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MapComponentComponent } from './map-component/map-component.component';
import { ApproutingModule } from './app-routing.module';
import { TableViewComponent } from './table-view/table-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SassTestComponent } from './sass-test/sass-test.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ScreenModule } from './screen/screen.module';
import { CCInterceptor } from './myInterceptor';
import {HTTP_INTERCEPTORS}from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {  HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  imports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    
  ],
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    
  ],
  declarations: [TableViewComponent, DashboardComponent, SassTestComponent, LoginpageComponent],
  
})


export class DemoMaterialModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}




@NgModule({
  declarations: [
    AppComponent,MapComponentComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule
    ,BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MdlPopoverModule,MdlModule,MdlSliderModule,ApproutingModule,
    ScreenModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRBgzZFqFrU1n61iL-TU9WAgqV22ZFbPs'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [AppComponent],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CCInterceptor,multi:true}],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);