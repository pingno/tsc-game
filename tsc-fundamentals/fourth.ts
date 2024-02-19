// TS Functions

//TypeScript has a specific syntax for typing functions parameters and return values.

//Return Type
// - The type of the value returned by the function can be explicityly defined

function getTime(): number{ //the :number here specifies that this function returns a number
    return new Date().getTime();
}

console.log(getTime());



//Void Return Type
// - the type void can be used to indicate a function doesn't reutnr any value.

function printHello(): void {
    console.log('Hello!')
}



//Parameters
// Function parameters are types with a similar syntax as variable declarations

function multiply(a: number, b: number) {
    return a * b;
}


//Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicityly marked as optional
// the '?' operator marks a paramtere as optional

function add(a: number, b: number, c?: number){
    return a + b + (c || 0);
}

console.log(add(3,2))


//Default Parameters
// - for parameters with default values, the default value goes after the type annotation:

function pow(value: number, exponent: number = 10){
    return value ** exponent
}

console.log(pow(10))


//Named Parameters
// - Typing named parameters follows the same pattern as typing normal parameters

function divide({ dividend, divisor}: { dividend: number, divisor: number }) {
    return dividend / divisor
}

console.log(divide({dividend: 10, divisor: 2}))