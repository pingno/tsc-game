//TS Enums
//An enum is a special "class" that represents a group of constants (unchangeable variables)
// Enums come in two flavors string and numeric.


//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value:

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