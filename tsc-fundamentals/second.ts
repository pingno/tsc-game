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