import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageRatedListComponent } from './usage-rated-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/components/container/container.module';
import { UsageCardModule } from '../../card/usage-card.module';
import { UsageRatedListRoutingModule } from './usage-rated-list-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    UsageRatedListComponent
  ],
  imports: [
    CommonModule,  MatToolbarModule, ContainerModule, UsageCardModule,UsageRatedListRoutingModule,MatButtonModule, MatIconModule,
  ]
})
export class UsageRatedListModule { }
