import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.component.html',
  styleUrls: ['./functionality.component.sass']
})
export class FunctionalityComponent implements OnInit {
  randomNumbers = _.times(10, () => _.random(-1000, 1000));

  constructor() { }

  ngOnInit(): void {

  }

  isNumberDivisibleBy(randomNumber: number, divider: number): boolean {
    return randomNumber % divider === 0;
  }

  // Return the correct response according to the divisibility of the random number
  handleNumber(randomNumber: number): string | number {
    const isDivisibleBy3 = this.isNumberDivisibleBy(randomNumber, 3);
    const isDivisibleBy5 = this.isNumberDivisibleBy(randomNumber, 5);

    if (isDivisibleBy3 && isDivisibleBy5) {
      return 'Gestform';
    } else if (isDivisibleBy3) {
      return 'Geste';
    } else if (isDivisibleBy5) {
      return 'Forme';
    } else {
      return randomNumber;
    }
  }

  generateRandomNumbers(amount: number): void {
    this.randomNumbers = _.times(amount, () => _.random(-1000, 1000));
  }

  tst(val) {
    console.log(val);
    
  }
}
