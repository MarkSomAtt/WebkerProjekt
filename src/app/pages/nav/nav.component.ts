import { Component} from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { CATEGORIES } from 'src/app/database/category.database';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  categories = CATEGORIES;

  constructor(private router: Router, private authService: AuthService) { }


  user=this.authService.getuser;
  

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
