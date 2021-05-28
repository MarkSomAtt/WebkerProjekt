import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistationComponent } from './registation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    RegistationComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RegistrationRoutingModule, MatCardModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatChipsModule
  ], 
  exports:[RegistationComponent]
})
export class RegistationModule { }
