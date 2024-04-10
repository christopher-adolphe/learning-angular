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
// converted to a standalone component
bootstrapApplication(AppComponent);
