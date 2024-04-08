import { createAction, props } from '@ngrx/store';

export const init = createAction('[Counter] init');

export const set = createAction(
  '[Counter] set',
  props<{ value: number }>(),
);

export const increment = createAction('[Counter] Increment');

export const decrement = createAction('[Counter] Decrement');

export const incrementByValue = createAction(
  '[Counter] IncrementByValue',
  props<{ value: number }>(),
);

// An alternative syntax to create actions is
// to create functions which return an object
// with a `type` and an optional `payload`
// properties

// export function increment() {
//   return {
//     type: '[Counter] Increment',
//   }
// }

// export function decrement() {
//   return {
//     type: '[Counter] Decrement',
//   }
// }

// export function incrementByValue(value: number) {
//   return {
//     type: '[Counter] IncrementByValue',
//     payload: value,
//   }
// }
