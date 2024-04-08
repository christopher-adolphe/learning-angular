import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCounter, selectDoubleCounter } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter$: Observable<number>;
  doubleCounter$ : Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    // this.counter$ = this.store.select('counter');
    this.counter$ = this.store.select(selectCounter);
    this.doubleCounter$ = this.store.select(selectDoubleCounter);
  }
}

// export class CounterOutputComponent implements OnInit, OnDestroy {
//   counter = 0;
//   counterServiceSub?: Subscription;

//   constructor(private counterService: CounterService) {}

//   ngOnInit(): void {
//     this.counterServiceSub = this.counterService.counterChanged.subscribe(
//       (newVal) => (this.counter = newVal)
//     );
//   }

//   ngOnDestroy(): void {
//     if (this.counterServiceSub) {
//       this.counterServiceSub.unsubscribe();
//     }
//   }
// }
