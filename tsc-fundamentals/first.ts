//3 Main primitives in JS and TS

//boolean - true or false values
//number - whole numbers and floating point values
//string - text values like "TypeScript Rocks"

//2 less common primitives used in later versions of JS and TS

//bigint - whoel numbers and floating point values, but allow larger negative and positive numbers than the number type
//symbol - are used to create a globally unique identifier



//Type assignment

//Explicit
let firstName: string = "Dylan"

//Implicit
let lastName = "Stan"

//Implicit assignment forces TS to infer the value


//if you want to infer a variable to be reassigned a different data type
// you must use the any type

//without any
// let u = true;
// u =  "string";
// Math.round(u);

//with any (no errors) disables type checking
let v: any = true;
v = "string";
Math.round(v);


//Type: unknown - similar to any, but safer alternative
//TS will prevent unknown types from being used

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting


// Unknown is best used when you don't know the type of data being typed.  To add a type later, you'll need to cast it
// Casting is when we suse the "as" keyword to say property or variable is of the casted type;



//Type: never
//never effictively throws an error whenever it is defined
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'
//rarely used


//Type: undefined & null
//undefined and null are types that refer to the JS primitives undefined and null respectively
let y: undefined = undefined;
let z: null = null;



