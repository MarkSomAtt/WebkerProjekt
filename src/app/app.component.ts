import { Component } from '@angular/core';
import {Usage} from './models/Usage'
import { TitleService } from './services/routing/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  


  constructor(private titleService: TitleService){
    this.titleService.refreshTitle();

  }

    
}
