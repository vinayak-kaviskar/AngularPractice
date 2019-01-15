import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule
  ]
})
export class AppMaterialModule { }
