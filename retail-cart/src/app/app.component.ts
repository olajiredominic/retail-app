import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  template: '<app-toast/> <router-outlet></router-outlet>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retail-cart';
}
