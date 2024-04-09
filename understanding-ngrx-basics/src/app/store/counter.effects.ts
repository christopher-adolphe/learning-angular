import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, tap, withLatestFrom, of } from 'rxjs';

import { decrement, increment, init, set } from './counter.actions';
import { selectCounter } from './counter.selectors';

@Injectable()
export class CounterEffects {
  loadCounter = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(init),
        switchMap(() => {
          const storedCounter = localStorage.getItem('counter');

          return of(set({ value: storedCounter ? +storedCounter : 0 }));
        }),
      );
    }
  );

  saveCounter = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(decrement, increment),
        withLatestFrom(this.store.select(selectCounter)),
        tap(([action, counter]) => {
          console.log('effett: ', { action, counter });
          localStorage.setItem('counter', counter.toString())
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<{ counter: number }>) {}
}
