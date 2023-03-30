import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(result => {
      if (result) {
        // Login successful, navigate to home page
        this.router.navigate(['/home']);
      } else {
        // Login failed, display error message
        alert('Invalid email or password');
      }
    });
  }
}

