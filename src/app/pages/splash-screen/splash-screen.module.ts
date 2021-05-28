import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';



@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatRippleModule,SplashScreenRoutingModule
  ],
  exports:[SplashScreenComponent]
})
export class SplashScreenModule { }
