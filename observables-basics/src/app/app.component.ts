import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private _ObsSubscription: Subscription;
  message: string;
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this._ObsSubscription = this.userService.userActivated.subscribe(
      (activationMessage: string) => this.message = activationMessage,
      (error: any) => this.message = ''
    );
  }

  ngOnDestroy(): void {
    this._ObsSubscription.unsubscribe();
  }

}
