import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart/cart.service';
import { PRODUCTS } from '../../consts/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(private cartService: CartService) { }


  addCartItem(item: Product) {
    this.cartService.addToCart(item);
  }
  products: Product[] = PRODUCTS;
}
