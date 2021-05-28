import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageReceivedListComponent } from './usage-received-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/components/container/container.module';
import { UsageCardModule } from '../../card/usage-card.module';
import { UsageReceivedListRoutingModule } from './usage-received-list-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    UsageReceivedListComponent
  ],
  imports: [
    CommonModule,  MatToolbarModule, ContainerModule, UsageCardModule,UsageReceivedListRoutingModule,MatButtonModule, MatIconModule,
  ]
})
export class UsageReceivedListModule { }
