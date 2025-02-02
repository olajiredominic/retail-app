import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../services/product/product.model';
import { CommonModule } from '@angular/common';

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
