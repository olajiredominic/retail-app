import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
