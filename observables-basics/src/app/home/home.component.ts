import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _ObsSubscription: Subscription

  constructor() { }

  ngOnInit(): void {
    /**
     * An observable is a construct that provides a mechanism to create a data source
     * that can emit values to a stream. It uses an observer to emit values or errors
     * to the stream. The observer can also complete the stream; meaning that it is
     * done and will no more emit values.
     */

    // Using a built-in observable from rxjs called #interval()
    // this._ObsSubscription = interval(1000).subscribe(
    //   count => console.log(count)
    // );

    // Creating a custom observable that simulate the same behaviour as #interval()
    // The #observer parameter is callback function of the observable that make any subscriber aware of new value or errors emitted by the observable
    // and also when the observable is completed 
    const customInterval = Observable.create(observer => {
      let count = 0;

      // Using #setInterval() web api to increment #count variable every 1000ms
      setInterval(() => {
        // Using #next() to emit the value of #count in the stream
        observer.next(count);

        // Setting a condition under which the observable should emit an error to the stream
        // if (count === 3) {
        //   // Using #error() to emit an error
        //   observer.error(new Error('Oops! Sorry, something went wrong.'));
        // }

        // Setting a condition under which the observable should be completed to the stream
        if (count >= 6 ) {
          // Using #complete() to close the stream
          observer.complete();
        }

        count++;
      }, 1000);
    });

    // Subscribing to the custom observable
    // Using #pipe() on the custom observable to apply rxjs operators which can transform the data obtained from the stream
    // #pipe() takes a function as parameter which is in fact the operator we want to apply on the data to transform it
    this._ObsSubscription = customInterval
      .pipe(
        // The #filter() operator filters the values from the stream and returns only those values that satisfy the specified condition
        filter((countData: number) => {
          return countData % 2 === 0;
        }),
        // The #map() operator gets the values from the stream, applies the required transformation and returns the new transformed values
        map((countData: number) => {
          return `Round ${countData}. Fight!!`;
        })
      )
      .subscribe(
        // Using the #next handle to get new values from the stream
        (countData: string) => console.log(countData),

        // Using the #error handle to get errors from the stream
        (countError: Error) => console.log(countError.message),

        // Using the #complete handle to know when the stream is closed
        () => console.log('Closing the stream. Goodbye!')
      );
  }

  ngOnDestroy(): void {
    this._ObsSubscription.unsubscribe();
  }

}
