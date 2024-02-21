/*
TS Casting

There are times when working with types where it's necessary to override the type of a variable
such as when incorrect types are provided by a library.

Casting is the process of overriding a type

Casting wiht as

a straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable

*/

let x: unknown = 'hello';
console.log((x as string).length); //output 5

// casting DOES NOT change the type of the data
let x2: unknown = 4;
console.log((x2 as string).length); //prints undefined since numbers don't have a length

//TS will attempt to typecheck casts to prevent casts that don't seem correct



//Casting with <>
// Using <> works the same as casting with as

let x3: unknown = 'hello';
console.log((<string>x3).length); //output 5



//Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type

// let x4 = 'hello';
// console.log(((x4 as unknown) as number).length) // x is not actually a number so this will return undefined

