import { Component } from '@angular/core';
import { Product } from '../../services/product/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      imageUrl: 'gamepad.png',
    },
    {
      name: 'AK-900 Wired Keyboard',
      price: 960,
      imageUrl: 'keyboard.png',
    },
    {
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      imageUrl: 'monitor.png',
    },
    {
      name: 'S-Series Comfort Chair',
      price: 375,
      imageUrl: 'chair.png',
    },
  ];
}
