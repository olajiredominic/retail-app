import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDropdownItemComponent } from './cart-dropdown-item.component';
import { By } from '@angular/platform-browser';
import { CartItem } from '../../models/cart.model';

describe('CartDropdownItemComponent', () => {
  let component: CartDropdownItemComponent;
  let fixture: ComponentFixture<CartDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartDropdownItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartDropdownItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item details correctly', () => {
    component.item = {
      product: { name: 'Test Product', price: 10, imageUrl: 'test.jpg' },
      quantity: 2,
    } as CartItem;
    fixture.detectChanges();

    const nameElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const priceElement = fixture.debugElement.query(By.css('p')).nativeElement;
    const imageElement = fixture.debugElement.query(By.css('img')).nativeElement;

    expect(nameElement.textContent).toContain('Test Product');
    expect(priceElement.textContent).toContain('$10 x 2 = $20');
    expect(imageElement.src).toContain('test.jpg');
  });

  it('should emit event when increase button is clicked', () => {
    spyOn(component.increaseCount, 'emit');

    component.item = {
      product: { name: 'Test Product', price: 10, imageUrl: 'test.jpg' },
      quantity: 2,
    } as CartItem;
    fixture.detectChanges();

    const increaseButton = fixture.debugElement.query(By.css('button:last-child')).nativeElement;
    increaseButton.click();

    expect(component.increaseCount.emit).toHaveBeenCalled();
  });

  it('should emit event when decrease button is clicked', () => {
    spyOn(component.decreaseCount, 'emit');

    component.item = {
      product: { name: 'Test Product', price: 10, imageUrl: 'test.jpg' },
      quantity: 2,
    } as CartItem;
    fixture.detectChanges();

    const decreaseButton = fixture.debugElement.query(By.css('button:first-child')).nativeElement;
    decreaseButton.click();

    expect(component.decreaseCount.emit).toHaveBeenCalled();
  });
});
