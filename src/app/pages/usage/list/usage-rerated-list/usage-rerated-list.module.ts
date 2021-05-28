import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageReratedListComponent } from './usage-rerated-list.component';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/components/container/container.module';
import { UsageCardModule } from '../../card/usage-card.module';
import { UsageReratedListRoutingModule } from './usage-rerated-list-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,  MatToolbarModule, ContainerModule, UsageCardModule,UsageReratedListRoutingModule
  ]
})
export class UsageReratedListModule { }
