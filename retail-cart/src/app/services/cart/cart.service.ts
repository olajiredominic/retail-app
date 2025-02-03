import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../models/cart.model';
import { Product } from '../../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.cart = this.loadCart();
    this.cartSubject.next(this.cart);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart(): CartItem[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(product: Product) {
    const item = this.cart.find(i => i.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    this.saveCart();
    this.cartSubject.next([...this.cart]);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
    this.saveCart();
    this.cartSubject.next([...this.cart]);
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      if (quantity === 0) this.removeFromCart(productId);
      this.saveCart();
      this.cartSubject.next([...this.cart]);
    }
  }

  getCartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }
}
