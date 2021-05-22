import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FunctionalityComponent } from './functionality.component';

describe('FunctionalityComponent', () => {
  let component: FunctionalityComponent;
  let fixture: ComponentFixture<FunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random list of integer between -1000 and 1000', () => {
    const randomList = component.randomNumbers;

    randomList.forEach(randomNumber => {
      expect(randomNumber).toBeGreaterThanOrEqual(-1000);
      expect(randomNumber).toBeLessThanOrEqual(1000);
    });
  });

  it('should display the list of random numbers', () => {
    const numbers = fixture.debugElement.queryAll(By.css('[data-test=random-number]'));
    const randomList = component.randomNumbers;

    expect(numbers.length).toEqual(component.randomNumbers.length);
    randomList.forEach((randomNumber, index) => {
      expect(+numbers[index].nativeElement.innerHTML).toEqual(randomNumber);
    });
  });

  it('should display the correct value for each random value according to its divisibility', () => {
    const results = fixture.debugElement.queryAll(By.css('[data-test=result]'));

    results.forEach((result, index) => {
      // We parse the result of handleNumber to a string in case handleNumber return a number (if the number is not divisible)
      expect(result.nativeElement.innerHTML).toEqual(component.handleNumber(component.randomNumbers[index]) + '');
    });
  });

  describe('Random number generation buttons', () => {
    describe('Generate 10 random numbers button', () => {
      it('should display a button to generate 10 random numbers', () => {
        const button = fixture.debugElement.query(By.css('[data-test=generate-10]'));

        expect(button).toBeTruthy();
      });

      it('should generate 10 random numbers when clicked', () => {
        const oldNumbers = component.randomNumbers;
        const button = fixture.debugElement.query(By.css('[data-test=generate-10]'));

        button.triggerEventHandler('click', null);

        expect(component.randomNumbers.length).toEqual(10);
        expect(component.randomNumbers).not.toEqual(oldNumbers);
      });
    });

    describe('Generate 20 random numbers button', () => {
      it('should display a button to generate 20 random numbers', () => {
        const button = fixture.debugElement.query(By.css('[data-test=generate-20]'));

        expect(button).toBeTruthy();
      });

      it('should generate 20 random numbers when clicked', () => {
        const oldNumbers = component.randomNumbers;
        const button = fixture.debugElement.query(By.css('[data-test=generate-20]'));

        button.triggerEventHandler('click', null);

        expect(component.randomNumbers.length).toEqual(20);
        expect(component.randomNumbers).not.toEqual(oldNumbers);
      });
    });

    describe('Generate 50 random numbers button', () => {
      it('should display a button to generate 50 random numbers', () => {
        const button = fixture.debugElement.query(By.css('[data-test=generate-50]'));

        expect(button).toBeTruthy();
      });

      it('should generate 50 random numbers when clicked', () => {
        const oldNumbers = component.randomNumbers;
        const button = fixture.debugElement.query(By.css('[data-test=generate-50]'));

        button.triggerEventHandler('click', null);

        expect(component.randomNumbers.length).toEqual(50);
        expect(component.randomNumbers).not.toEqual(oldNumbers);
      });
    });

    describe('Generate a custom amount of random numbers button', () => {
      it('should display an input to enter an amount of number randomly generated', () => {
        const inputNumber = fixture.debugElement.query(By.css('[data-test=amount-of-number]'));

        expect(inputNumber).toBeTruthy();
      });

      it('should show a button to generate the amount of random number when a number is typed', () => {
        const input = document.querySelector('[data-test=amount-of-number]') as HTMLInputElement;
        let button = fixture.debugElement.query(By.css('[data-test=generate-custom]'));
        expect(button).toBeFalsy();

        input.value = '3';
        fixture.detectChanges();

        button = fixture.debugElement.query(By.css('[data-test=generate-custom]'));
        expect(button).toBeTruthy();
      });

      it('should not show a button to generate the amount of random number when anything else than a number is typed', () => {
        const input = document.querySelector('[data-test=amount-of-number]') as HTMLInputElement;
        let button = fixture.debugElement.query(By.css('[data-test=generate-custom]'));
        expect(button).toBeFalsy();

        input.value = 'Not a number';
        fixture.detectChanges();

        button = fixture.debugElement.query(By.css('[data-test=generate-custom]'));
        expect(button).toBeFalsy();
      });

      it('should generate the correct amount of random numbers', () => {
        const input = document.querySelector('[data-test=amount-of-number]') as HTMLInputElement;
        input.value = '27';
        fixture.detectChanges();
        const button = fixture.debugElement.query(By.css('[data-test=generate-custom]'));

        button.triggerEventHandler('click', null);

        expect(component.randomNumbers.length).toEqual(27);
      });
    });
  });



  describe('isNumberDivisibleBy', () => {
    it('should return true if number is divisible by 5', () => {
      const result = component.isNumberDivisibleBy(10, 5);

      expect(result).toBeTrue();
    });

    it('should return true if number is divisible by 3', () => {
      const result = component.isNumberDivisibleBy(9, 3);

      expect(result).toBeTrue();
    });

    it('should return false if number is not divisible by 5', () => {
      const result = component.isNumberDivisibleBy(9, 5);

      expect(result).toBeFalse();
    });

    it('should return false if number is not divisible by 3', () => {
      const result = component.isNumberDivisibleBy(10, 3);

      expect(result).toBeFalse();
    });
  });

  describe('handleNumber', () => {
    it('should return "Geste" if the number is only divisible by 3', () => {
      const result = component.handleNumber(33);

      expect(result).toBe('Geste');
    });

    it('should return "Forme" if the number is only divisible by 5', () => {
      const result = component.handleNumber(20);

      expect(result).toBe('Forme');
    });
    it('should return "GestForm" if the number is divisible by 3 and 5', () => {
      const result = component.handleNumber(15);

      expect(result).toBe('Gestform');
    });
    it('should return the number if the number is not divisible by 3 nor 5', () => {
      const result = component.handleNumber(28);

      expect(result).toBe(28);
    });
  });

});
