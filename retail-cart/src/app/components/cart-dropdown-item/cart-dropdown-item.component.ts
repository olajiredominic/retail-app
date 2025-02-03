import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart-dropdown-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-dropdown-item.component.html',
  styleUrl: './cart-dropdown-item.component.scss'
})
export class CartDropdownItemComponent {
  @Input() item!: CartItem;
  @Output() increaseCount: EventEmitter<void> = new EventEmitter();
  @Output() decreaseCount: EventEmitter<void> = new EventEmitter();

  decreaseQuantity() {
    this.decreaseCount.emit();
  }

  increaseQuantity() {
    this.increaseCount.emit();
  }
}
