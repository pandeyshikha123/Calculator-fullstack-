// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
// This code imports necessary modules and components to bootstrap the Angular application.
// It uses `bootstrapApplication` to initialize the application with the root component `AppComponent`

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
// This code bootstraps the Angular application with the root component and provides the router configuration.
// The `provideRouter` function is used to set up the routing based on the defined routes in `app.routes.ts`.
// The `AppComponent` serves as the root component of the application, and the router will handle navigation based on the defined routes.
// The `bootstrapApplication` function initializes the application with the specified component and providers.  