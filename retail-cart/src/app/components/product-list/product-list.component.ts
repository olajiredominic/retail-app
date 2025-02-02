import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

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
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      imageUrl: 'gamepad.png',
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      imageUrl: 'keyboard.png',
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      imageUrl: 'monitor.png',
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      price: 375,
      imageUrl: 'chair.png',
    },
  ];
}
