import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  readonly isLoading = signal(false);

  show(): void {
      queueMicrotask(() => {
        this.isLoading.set(true);
      });
  }

  hide(): void {
    queueMicrotask(() => {
      this.isLoading.set(false);
    });
  }
}
