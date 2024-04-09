import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { Post } from './post.interface';
import { Observable, throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  /**
   * Initial data from backend
   * 
   * Learning Basics of Http Requests in Angular
   * In Angular Http requests are manages through observables. Whenever you make a request (GET, POST, PUT, DELETE), you must subscribe to it so that it is sent to the backend.
   * 
   * Learning Basics of Observable
   * An observable is a construct that provides a mechanism to create a data source that can emit values to a stream. It uses an observer to emit values or errors to the stream. The observer can also complete the stream; meaning that it is done and will no more emit values.
   * 
   * No Bake Desserts
   * No bake dessert is the best kind of dessert! Satisfy your sweet tooth with desserts such as no bake cheesecake with a graham cracker crust and chocolate peanut butter pies that will go perfectly with a little whipped cream. These are great for summertime cookouts, potlucks, birthdays, and more! Because what party isn’t made better by a delicious no bake dessert?
   * 
   * Easy Dinner
   * Getting home after a long day and need a quick food fix? We’re here to help you streamline your busy weeknights with some easy dinner recipes! These super simple meals are here to help get you and your family fed in 30 minutes or less. We have recipes for every craving including leftover rotisserie chicken dinners, sheet pan meals, and amazing comfort foods like mac 'n' cheese. Brought to you by McCormick.
   */

  constructor(private httpClientService: HttpClient) {}

  createPost(post: Post): Observable<any> {
    return this.httpClientService
      .post<any>('https://ng-http-basics.firebaseio.com/posts.json', post, {observe: 'response'})
  }

  fetchPosts(): Observable<Post[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'something');

    return this.httpClientService
      .get<{[key: string]: Post}>('https://ng-http-basics.firebaseio.com/posts.json', {
        headers: new HttpHeaders({'Custom-Header': 'Christopher'}),
        params: searchParams
      })
      .pipe(
        map(response => {
          const posts: Post[] = [];

          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              posts.push({...response[key], id: key})
            }
          }

          return posts;
        }),
        catchError(errorResponse => throwError(errorResponse))
      );
  }

  fetchPost(id: string) {}

  deletePost() {
    return this.httpClientService
      .delete('https://ng-http-basics.firebaseio.com/posts.json', {observe: 'events'})
      .pipe(
        tap(event => console.log(event))
      );
  }

}
