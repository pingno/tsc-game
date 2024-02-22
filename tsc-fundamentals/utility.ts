/*

TS comes with a large number of types that can help with some common type manipulation, usually reffered to as utility types.

This chapter covers the most popular utility types.

*/

// Partial
// - Changes all the properties in an object to be optional.

interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

//Required
// - Changes all the properties in an object to be required

interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // 'Required' forces milage to be defined
}

// Record
// - is a shortcut to defining an object type with a specific key type and value type.

const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
}

// Record<string, number> is equivalent to { [key: string]: number }

// Omit
// - removes keys from an object type

interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // 'Omit' has removed age and location from the type and they can't be defined here
}

// Pick
// - removes all but the specified keys from an object type.

interface Guy {
    name: string;
    age: number;
    location?: string;
}

const bob2: Pick<Guy, 'name'> = {
    name: 'Bob'
}

// Exclude
// - removes types from a union

// type Primitive = string | number | boolean
// const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.


// ReturnType
// - extracts the return type of a function type.

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
}


// Parameters
// - extracts the parameter types of a function type as an array

type PointPrinter = (p: { x: number; y: number; }) => void;
const point2: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
}


// Readonly
// - is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

// Keep in mind TS will prevent this at compile time, but in theory since it is compiled down to JS you can still override a readonly property

interface Girl {
    name: string;
    age: number;
}

const person: Readonly<Girl> = {
    name: "Samantha",
    age: 35
}

// person.name = "Shigo" 
// cannot assign to 'name' because it is a read-only property