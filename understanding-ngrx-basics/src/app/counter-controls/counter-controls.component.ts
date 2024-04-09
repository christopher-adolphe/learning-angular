import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, incrementByValue, decrement } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store<{ counter: number }>) {}

  increment() {
    this.store.dispatch(increment());
  }

  incrementByValue(value: number) {
    this.store.dispatch(incrementByValue({ value }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}

// export class CounterControlsComponent {
//   constructor(private counterService: CounterService) {}

//   increment() {
//     this.counterService.increment();
//   }

//   decrement() {
//     this.counterService.decrement();
//   }
// }
