import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {  // Replace 'any' with the actual type for your user object
    username: '',
    email: '',
    phone: '',
    address: '',
   
  };

  saveProfile() {
    // Implement logic to save the user profile details
    // You may need to interact with a service or API to update the user's information
  }
}

