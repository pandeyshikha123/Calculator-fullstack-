import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
];

// This file defines the routes for the Angular application, specifically for the calculator component.
// The `CalculatorComponent` is imported and associated with the path 'calculator'.