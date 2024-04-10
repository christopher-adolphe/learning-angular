import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';
// import { AnalyticsService } from './app/shared/analytics.service';
import { AppRoutingModule } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // AnalyticsService,
    // Using the `importProvidersFrom()` function to
    // the Angular application aware of our routes. It
    // takes `AppRoutngModule` as argument
    importProvidersFrom(AppRoutingModule)
  ],
});
