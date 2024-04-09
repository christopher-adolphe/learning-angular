import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  isLogged: boolean;

  constructor() {}

  // Using the #intercept() to apply logics any outgoing http request
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // console.log('Request is on it\'s way: ', request);
    const token = 'M5GEjoGLSjID-DPfADg';
    this.isLogged = true;

    if (this.isLogged) {
      // Appending a new header to the outgoing request
      const newHeaders = request.headers.append('Authorization-Custom', `Bearer ${token}`);
      // Since http requests are immutable, we clone the actual request and add the new headers to the clone
      const modifiedRequest = request.clone({headers: newHeaders})

      // Returning #next.handle() to let the modified request continue after the interception
      return next.handle(modifiedRequest);
    } else {
      // Returning #next.handle() to let the request continue after the interception
      return next.handle(request);
    }   
  }

}
