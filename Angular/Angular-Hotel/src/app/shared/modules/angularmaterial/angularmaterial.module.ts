import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatSnackBarModule,MatIconModule,MatFormFieldModule,MatButtonModule,MatDividerModule,MatGridListModule,MatCardModule,MatInputModule,MatToolbarModule
  ],
  exports:[CommonModule,MatIconModule,MatFormFieldModule,MatButtonModule,MatDividerModule,MatGridListModule,MatCardModule,MatInputModule,MatToolbarModule]
})
export class AngularmaterialModule { }
