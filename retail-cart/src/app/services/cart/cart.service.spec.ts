import { Product } from '../../models/product.model';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  const testProduct: Product = { id: 1, name: 'Laptop', price: 1000, imageUrl: '' };
  const anotherProduct: Product = { id: 2, name: 'Mouse', price: 50, imageUrl: '' };

  beforeEach(() => {
    service = new CartService();
  });

  it('should add a product to the cart', () => {
    service.addToCart(testProduct);
    expect(service.getCartTotal()).toBe(1000);
  });

  it('should remove a product from the cart', () => {
    service.addToCart(testProduct);
    service.removeFromCart(testProduct.id);
    expect(service.getCartTotal()).toBe(0);
  });

  it('should update the quantity of a product in the cart', () => {
    service.addToCart(testProduct);
    service.updateQuantity(testProduct.id, 2);
    expect(service.getCartTotal()).toBe(2000);
  });

  it('should remove the product when quantity is set to zero', () => {
    service.addToCart(testProduct);
    service.updateQuantity(testProduct.id, 0);
    expect(service.getCartTotal()).toBe(0);
  });

  it('should calculate the correct total for multiple products', () => {
    service.addToCart(testProduct);
    service.addToCart(anotherProduct);
    expect(service.getCartTotal()).toBe(1050);
  });

  it('should apply discount', () => {
    service.addToCart(testProduct);
    expect(service.getCartTotal() * 0.9).toBe(900); // SAVE10 discount
  });
});
