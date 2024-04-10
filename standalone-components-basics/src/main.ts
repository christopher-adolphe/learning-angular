import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// Using the `bootstrapApplication()` function from `'@angular/platform-browser'`
// to bootstrap the Angular application with the root `AppComponent` now
// converted to a standalone component.
// The `bootstrapApplication()` function takes the root component as
// its first argument. It can take a second optional argument which is
// a configuration object. This object has a `providers` property which
// can accept services that we might want to make available globally to
// the application. However, this is not required if the service is already
// decorated with the `@Injectable({ provideIn: 'root' })` decorator
bootstrapApplication(AppComponent);
