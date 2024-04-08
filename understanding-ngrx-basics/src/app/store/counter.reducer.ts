import { createReducer, on } from '@ngrx/store';

import { decrement, increment, incrementByValue } from './counter.actions';

const initialState = 0;

export const counterReducer =  createReducer(
  initialState,
  on(increment, (state) => {
    const nextCounter = state + 1;

    return nextCounter;
  }),
  on(decrement, (state) => {
    const nextCounter = state - 1;

    return nextCounter;
  }),
  on(incrementByValue, (state, action) => {
    const { value } = action;
    const nextCounter = state + value;

    return nextCounter;
  }),
);

// Under the hook, NgRx creates this counterReducer function
// automatically for us with the `createReducer()` function.
// However, this new syntax may not be compatible with older
// Angular project and therefore, knowing the alternative
// syntax can be beneficial in that case
// export function counterReducer(state = initialState, action: any) {
//   const { type, payload } = action;

//   switch(type) {
//     case '[Counter] Increment':
//       return state + 1;

//     case '[Counter] Decrement':
//       return state - 1;

//     case '[Counter] IncrementByValue':
//       return state + payload;
//   }

//   return state;
// }
