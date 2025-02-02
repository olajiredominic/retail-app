import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../models/cart.model';
import { Product } from '../../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const item = this.cart.find(i => i.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    this.cartSubject.next([...this.cart]);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
    this.cartSubject.next([...this.cart]);
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (quantity === 0) this.removeFromCart(productId);
      this.cartSubject.next([...this.cart]);
    }
  }

  getCartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}
