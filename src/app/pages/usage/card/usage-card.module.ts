import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageCardComponent } from './usage-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [UsageCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [UsageCardComponent]
})
export class UsageCardModule { }
