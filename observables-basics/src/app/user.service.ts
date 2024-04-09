import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // userActivated = new EventEmitter<string>();

  // Using a #subject to pass data between components
  // Subjects are more active observable in the sense that they allow us to emit new values to the stream from outside (i.e from our code)
  // With subjects we don't require handlers for #next() or #error()
  userActivated = new Subject<string>();

  constructor() {}

  activateUser(id: number) {
    this.userActivated.next(`User with id ${id} was activated!`);
  }

}
