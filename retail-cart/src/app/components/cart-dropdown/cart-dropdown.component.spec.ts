import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDropdownComponent } from './cart-dropdown.component';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';

class MockCartService {
  cart$ = of([]);
  addToCart = jasmine.createSpy('addToCart');
  removeFromCart = jasmine.createSpy('removeFromCart');
  updateQuantity = jasmine.createSpy('updateQuantity');
  getCartTotal = jasmine.createSpy('getCartTotal').and.returnValue(100);
}

describe('CartDropdownComponent', () => {
  let component: CartDropdownComponent;
  let fixture: ComponentFixture<CartDropdownComponent>;
  let cartService: MockCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartDropdownComponent],
      imports: [FormsModule],
      providers: [{ provide: CartService, useClass: MockCartService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDropdownComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService) as unknown as MockCartService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle cart visibility', () => {
    expect(component.isCartOpen).toBeFalse();
    component.toggleCart();
    expect(component.isCartOpen).toBeTrue();
    component.toggleCart();
    expect(component.isCartOpen).toBeFalse();
  });

  it('should call addToCart when increasing quantity', () => {
    const item = { product: { id: 1, name: 'test', price: 0, imageUrl: 'test.png' }, quantity: 1 };
    component.increaseQuantity(item);
    expect(cartService.addToCart).toHaveBeenCalledWith(item.product);
  });

  it('should call updateQuantity when decreasing quantity above 1', () => {
    const item = { product: { id: 1, name: 'test', price: 0, imageUrl: 'test.png' }, quantity: 2 };
    component.decreaseQuantity(item);
    expect(cartService.updateQuantity).toHaveBeenCalledWith(1, 1);
  });

  it('should call removeFromCart when decreasing quantity at 1', () => {
    const item = { product: { id: 1, name: 'test', price: 0, imageUrl: 'test.png' }, quantity: 1 };
    component.decreaseQuantity(item);
    expect(cartService.removeFromCart).toHaveBeenCalledWith(1);
  });

  it('should calculate subtotal correctly', () => {
    expect(component.getSubtotal()).toBe(100);
  });

  it('should apply discount correctly when valid code is used', () => {
    component.discountCode = 'SAVE10';
    component.applyDiscount();
    expect(component.discountApplied).toBeTrue();
    expect(component.discountAmount).toBe(10);
  });

  it('should not apply discount when invalid code is used', () => {
    spyOn(window, 'alert');
    component.discountCode = 'INVALID';
    component.applyDiscount();
    expect(component.discountApplied).toBeFalse();
    expect(component.discountAmount).toBe(0);
    expect(window.alert).toHaveBeenCalledWith('Invalid discount code');
  });

  it('should calculate total correctly after discount', () => {
    component.discountCode = 'SAVE10';
    component.applyDiscount();
    expect(component.getTotal()).toBe(90);
  });
});
