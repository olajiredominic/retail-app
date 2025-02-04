import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts$ = new BehaviorSubject<Toast[]>([]);
  private toastId = 0;

  getToasts() {
    return this.toasts$.asObservable();
  }

  showToast(type: Toast['type'], message: string, duration = 3000) {
    const id = this.toastId++;
    const newToast: Toast = { id, type, message };

    this.toasts$.next([...this.toasts$.value, newToast]);

    setTimeout(() => this.dismissToast(id), duration);
  }

  dismissToast(id: number) {
    this.toasts$.next(this.toasts$.value.filter(toast => toast.id !== id));
  }
}
