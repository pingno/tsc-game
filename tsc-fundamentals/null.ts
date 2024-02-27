/*

Optional Chaining

- is a JavaScript feature that works wellw ith TypeScript's null handling.  It allows accessing properties on an object, that may or may not exist, with a compact syntax.

It can be sued with the ?. operator when accessing properties

*/


interface House {
    sqft: number;
    yard?: {
        sqft: number;
    }
}

function printYardSize(house: House){
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`)
    }
}

let home: House = {
    sqft: 500
};

printYardSize(home); // Prints 'No yard'

// Nullish Coalescence
/*

Nullish Coalescence is another JS Feature that also works well with TS's null handling. It allows
writing expressions that have a fallback specifically when dealing with null or undefined.  This is 
useful when other falsy values can occur in the expression but are still valid.  It can be used with the ??
operator in an expression, similar to using the && operator

*/

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`)
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'


/*

Null Assertion

TS's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility
of being null or undefined.  An easy way to do this is to use casting, but TS also provides the
! operator as a convenient shortcut.

*/

function getValue(): string | undefined {
    return 'hello';

}

let value = getValue();
console.log('value length: ' + value!.length);  // Prints value length: 5

// just like casting, this can be unsafe and should be used with care.


/* 

Array bounds handling

Even with strictNullChecks enabled, by default TypeScript will assume array access will never return
undefined (unless undefined is part of the array type).

The config noUncheckedIndexedAccess can be used to change this behavior.

*/

let array: number[] = [1, 2, 3];
let value2 = array[0]; // with 'noUncheckedIndexedAccess' this has the type 'number | undefined' 


// TS Definitely Types
// NPM packages in the broad JS exocosystem doesn't always have types available
// Sometimes the projects are no longer maintained, and other times they aren't interested in, agree with, or have time to use TS


/* 

Using non-typed NPM packages in TypeScript

- will not be safe due to lack fo types

to help TS developers use such packages, there is a community maintained project called Definitely Typed

Definitely Typed is a project that provides a central repo of TS defininitions for NPM packages which do not have types



*/