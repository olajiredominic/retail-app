import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CartDropdownItemComponent } from '../cart-dropdown-item/cart-dropdown-item.component';

@Component({
  selector: 'app-cart-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, CartDropdownItemComponent],
  templateUrl: './cart-dropdown.component.html',
  styleUrl: './cart-dropdown.component.scss'
})
export class CartDropdownComponent implements OnInit, OnDestroy {
  isCartOpen = false;
  cart: CartItem[] = [];
  discountCode = '';
  discountApplied = false;
  discountAmount = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    // Subscribe to cart updates
    this.cartSubscription = this.cartService.cart$.subscribe((items) => {
      this.cart = items;
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.cartSubscription.unsubscribe();
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  increaseQuantity(item: CartItem) {
    this.cartService.addToCart(item.product)
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      const count = item.quantity
      this.cartService.updateQuantity(item.product.id, count)
    } else {
      this.cartService.removeFromCart(item.product.id)
    }
  }



  getSubtotal(): number {
    return this.cartService.getCartTotal();
  }

  applyDiscount() {
    if (this.discountCode === 'SAVE10') {
      this.discountAmount = this.getSubtotal() * 0.1; // 10% discount
      this.discountApplied = true;
    } else {
      this.discountAmount = 0;
      this.discountApplied = false;
      alert('Invalid discount code');
    }
  }

  getTotal(): number {
    return this.getSubtotal() - this.discountAmount;
  }
}
