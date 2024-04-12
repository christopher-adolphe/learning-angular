import { NgFor } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    // We can use the `effect()` function to run
    // side effect logic that depend on other signals
    effect(() => console.log('Counter signal was updated: ', this.counter()));
  }

  increment() {
    this.counter.update(currentCounter => currentCounter + 1);
    this.actions.mutate(currentActions => currentActions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update(currentCounter => currentCounter - 1);
    // this.actions.mutate(currentActions => currentActions.push('DECREMENT'));

    // Alternatively, we can still use the `update()` method
    // from signals to update reference values like objects and
    // arrays. However, we should return a new object or array
    // and not use their mutable methods.
    this.actions.update(currentActions => [ ...currentActions, 'DECREMENT']);
  }
}
