import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.authService.saveUser(data.user);
        debugger;
        this.router.navigate(['/home']);
      },
      err => {
        this.errorMessage = err.error.message;
      }

    );
  }
  

}
