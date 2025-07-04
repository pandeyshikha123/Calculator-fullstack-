import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  operation = "";
  result: number | string | null = null;
  history: string[] = [];
  isDark = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const stored = localStorage.getItem('calc-history');
    if (stored) this.history = JSON.parse(stored);
  }

  calculate() {
    this.http.post<any>('http://localhost:3000/api/calculate', {
      num1: this.num1,
      num2: this.num2,
      operation: this.operation
    }).subscribe({
      next: (res) => {
        this.result = res.result;
        const entry = `${this.num1} ${this.getSymbol(this.operation)} ${this.num2} = ${res.result}`;
        this.history.unshift(entry);
        localStorage.setItem('calc-history', JSON.stringify(this.history));
      },
      error: (err) => this.result = err.error?.error || 'An error occurred'
    });
  }

  getSymbol(op: string): string {
    return {
      add: '+',
      subtract: '-',
      multiply: '×',
      divide: '÷',
      mod: '%',
      power: '^'
    }[op] || '?';
  }

  toggleDark() {
    this.isDark = !this.isDark;
  }
clearHistory(): void {
  this.history = [];
}

}
// This component handles the calculator logic, including sending requests to the backend and displaying results.
// It uses Angular's HttpClient to make POST requests to the backend API and updates the result based on the response.
// The `calculate` method sends the numbers and selected operation to the backend and updates the result accordingly.
// The component also handles errors by displaying an error message if the request fails.   