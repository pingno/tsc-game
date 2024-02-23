// TS Keyof
// - keyof is a keyword in TypeScript which is used toe xtract the key type from an object type.

// Keyof with explicit keys
// - when used on an object with explicit keys, keyof creates a union type with those keys.

interface Person {
    name: string;
    age: number;
}
// 'keyof Person' here creates a union type of "name" and "age", other strings will not be allowed

function printPersonProperty(person: Person, property: keyof Person){
    console.log(`Printing person property ${property}: "${person[property]}"`)
}

let person = {
    name: "Max",
    age: 27
};

printPersonProperty(person, "name") // Printing person property name: "Max"


// keyof with index signatures
// - can also be used with index signatures to extract the index type

type StringMap = { [key: string]: unknown };
// 'keyof StringMap' resolves to 'string' here
function createStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value }
}

// keyof with index signatures
// - can also be used with index signatures to extract the index type

type StringMap2 = { [key: string]: unknown };
// 'keyof StringMap' resolves to 'string' here

function createStringPair2(property: keyof StringMap2, value: string): StringMap {
    return { [property]: value }
}