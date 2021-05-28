import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageListComponent } from './usage-list.component';
import { UsageCardModule } from '../../card/usage-card.module';
import { ContainerModule } from 'src/app/components/container/container.module';
import { UsageListRoutingModule } from './usage-list-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsageListComponent
  ],
  imports: [
    CommonModule,  MatToolbarModule, ContainerModule, UsageCardModule,UsageListRoutingModule,MatButtonModule, MatIconModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule

  ]
})
export class UsageListModule { }
