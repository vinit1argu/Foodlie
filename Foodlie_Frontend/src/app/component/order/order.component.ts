import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  cartItems!: CartItem[]; // Replace 'any[]' with the actual type for your cart items

  constructor(private router: Router) {
    // Initialize 'cartItems' with the selected items from the cart
    // You can retrieve the cart items from your cart service or store here
  }

  calculateTotal(): number {
    // Calculate the total price based on the items in 'cartItems'
    let total = 0;
    for (const item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  placeOrder(): void {
    // Implement the logic to place the order and proceed to order confirmation
    // You may need to interact with a service or API to process the order
    // After placing the order, navigate to the order confirmation page
    this.router.navigate(['/order-confirmation']);
  }

  goBack(): void {
    // Implement logic to navigate back to the previous page (e.g., restaurant page or cart)
    this.router.navigate(['/restaurants']);
  }
}
