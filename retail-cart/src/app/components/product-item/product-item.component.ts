import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: Product
  @Output() onAddCartItem: EventEmitter<void> = new EventEmitter();

  toggleCartItem = () => {
    this.onAddCartItem.emit()
  }
}
