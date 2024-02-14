//TS Arrays

const names: string[] = []
names.push("Dylan") // no error
//names.push(3); //Error: Argument of type 'number' is not assignable to parameter of type 'string'

//keyword: Readonly
// - can prevent arrays from being changed

// const people: readonly string[] = ["Dylan"]
// people.push("Jack"); //Error: property 'push' does not exist on type 'readonly string[]'
//try removing the readonly modifier and see if it works?


//Type Inference
//TS can infer the type of an array if it has values

const numbers = [1,2,3]; //inferred to type number[]
numbers.push(4); //no error
// numbers.push("2"); //Error: Argument of type 'string' is not assignable to parameter of typep 'number'.
let head: number = numbers[0];



//TS Tuples
// A tuple is a typed array, with a pre-defined length and types for each index
// Tuples are great because they allow each element in the array to be a known type of value
// To define a tuple, specify the type of each element in the array:

// define our tuple
let ourTuple: [number, boolean, string];

//initialize correctly
ourTuple = [5, false, 'Coding God was here']

//we have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong')
console.log(ourTuple)


//define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

//throws errors as it is readonly
// ourReadonlyTuple.push('Coding God took a day off')


//Named Tuples
//allow us to provide context for our values at each index

// const graph: [x: number, y: number] = [55.2, 41.3]

//Destructuring Tuples
// Since tuples are arrays we can also desctructure them

const graph1: [number, number] = [55.3, 42.3]
const [x2, y2] = graph1;



//Objects

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

//TS can infer the types of properties based on their values.

const vehicle = {
    type: "Toyota"
}

vehicle.type = "Ford"; //no error
// vehicle.type = 2; //Error: Type 'number is not assignable to type 'string'