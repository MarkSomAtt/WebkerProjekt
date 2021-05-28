import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.scss']
})
export class RegistationComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  error=false;
  constructor(private router: Router,private authService: AuthService) { }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  registration(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        console.log(this.form.value);
        this.authService.SignUp(this.form.value.email, this.form.value.password1).then(
          result => {
            console.log(result);
            this.navTo('/home');
          },
          (error) => {
            this.error = true;
          }
        );
      }
    }else{
         this.error = true;
         }
  }




 
}
