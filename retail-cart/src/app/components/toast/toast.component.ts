import { Component, OnInit } from '@angular/core';
import { ToastService, Toast } from '../../services/toast.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ToastComponent implements OnInit {
  toasts$!: Observable<Toast[]>;

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toasts$ = this.toastService.getToasts();
  }

  dismissToast(id: number) {
    this.toastService.dismissToast(id);
  }
}
