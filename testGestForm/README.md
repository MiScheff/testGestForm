# TestGestForm

This application was developped as a test exercise from GestForm.

The point of the exercise was to develop an application that takes a random list of integer number from -1000 to 1000 and
for each number of the list, the application will display a specific word, whether its divisible by 3, 5, both or neither:
- If the number is divisible by 3 and 5 at the same time, the word displayed is "Gestform".
- If the number is only divisible by 5, the word displayed is "Forme".
- If the number is only divisible by 3, the word displayed is "Geste".
- Finally, if the number is not divisible by 3 nor 5, the number is displayed instead of a word.

When you land on the functionality page, 10 numbers are directly generated, and handled by the function that display the right word according to the divisibility of each number.
Then, you have different choices :
- Generate 10 new random numbers
- Generate 20 new random numbers
- Generate 50 new random numbers
- Generate a custom amount of new random numbers

The input field only accept numbers and, when filled, shows a button to add the chosen amount.

## Documentation

This little application only has 3 functions to operate :

### - isNumberDivisibleBy(randomNumber: number, divider: number) : boolean
This function takes a number and a divider, and return true if the number is divisible by the divider without remainder, or false if it has a remainder.

### - handleNumber(randomNumber: number): string | number
This function takes a number and return either a string if the number is divisible by 3, 5 or both, or return the same number if it's not.
The function returns "Geste" if the number is divisible only by 3, "Forme" if it's only divisible by 5, and "Gestform" if it's divisible by both.

### - generateRandomNumbers(amount: number): void 
This function generate a certain amount of random number, and put it in the property <b>randomNumbers</b> of the component Functionality.
