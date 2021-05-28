import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { UsageReratedListComponent } from './pages/usage/list/usage-rerated-list/usage-rerated-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsageCardModule } from './pages/usage/card/usage-card.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, NativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { UsageAddComponent } from './pages/usage/add/usage-add.component';
import { UsageEditComponent } from './pages/usage/usage-edit/usage-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    UsageReratedListComponent,
    UsageAddComponent,
    UsageEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HomeModule,
    AppRoutingModule,
    MatToolbarModule,
    UsageCardModule,
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    NativeDateModule,
    MatButtonModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
