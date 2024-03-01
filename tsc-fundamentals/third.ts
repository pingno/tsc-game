//TS Enums
//An enum is a special "class" that represents a group of constants (unchangeable variables)
// Enums come in two flavors string and numeric.


//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum Elements {
    Fire, Wind, Water, Earth
}

let FireNation = Elements.Fire


enum CardinalDirections {
    North,
    South,
    East,
    West
}

let currentDirection = CardinalDirections.North;
//logs 0
console.log(currentDirection);
//throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'


enum Elements1 { Fire = 1, Wind = 2, Water = 3, Earth = 4 }
console.log(Elements.Fire)
console.log(Elements.Earth)

enum CardinalDirections1 {
    North = 1,
    South,
    East,
    West
}

console.log(CardinalDirections.North); //logs 1
console.log(CardinalDirections.West); //logs 4

//Numeric Enums - Fully Initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound); //logs 404
console.log(StatusCodes.Success) //logs 200


//String Enums
enum Directions {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'West'
}

console.log(Directions.North); //logs North
console.log(Directions.South); //logs South



/* TS allows types to be defined separately from the variables that use them.
   Aliases and Interfaces allows types to be easily shared bewteen different variables/objects  */

//Type Aliases
// - Allow defining types with a custom name (an Alias)
// - can be used for primitives like string or more complex types such as objects and arrays:

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car1: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

//INterfaces
// - are similar to type aliases, except they only apply to object types.

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
}

//Extending Interfaces
// - Interfaces can extend each other's definition
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new

interface Square {
    height: number,
    width: number
}

interface ColoredSquare extends Rectangle {
    color: string
}

const coloredSquare: ColoredSquare = {
    height: 20,
    width: 20,
    color: "red"
}


//TS Union Types

//Union Types are used when a value can be more than a single type
//Such as when a property would be string or number

//Using the | we are saying our parameter is a string or number:

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');


//Union Type Errors
//Note: you need to know what your type is when union types are being used to avoid type errors:

// function printStatusCode1(code: string | number){
//     console.log(`My status code is ${code.toUpperCase()}.`)
// }

// error: Property 'toUpperCase' does not exist ontype 'string | number'.

