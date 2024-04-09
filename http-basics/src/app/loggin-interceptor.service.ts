import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    
    if (request.url.includes('posts.json')) {
      console.log('Outgoing post response');
    } else {
      console.log('Outgoing response');
    }

    return next
      .handle(request)
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            console.log('Incoming response');
            console.log('Incoming response body: ', event.body);
          }
        })
      );
  }

}
