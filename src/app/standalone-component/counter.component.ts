import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>{{ count() }}</p><button (click)="increment()">Increment</button>`
})
export class CounterComponent {
  count = signal(0);

  increment() {
    try {
      this.count.update(c => c + 1);
    } catch (error) {
      console.error('Error al incrementar el contador:', error);
    }
  }
}