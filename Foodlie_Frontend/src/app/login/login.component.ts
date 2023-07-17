import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ='';
  password: string = '';

  constructor() { }

  login(): void {
    // Implement login logic here, e.g., API call for authentication
    // If successful, navigate to the desired page
  }
}