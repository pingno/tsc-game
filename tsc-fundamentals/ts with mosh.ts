/*

Benefits
- static typing
- code completion
- refactoring
- shorthand notations

can catch your mistakes a compile time


npm i -g typescript
install globally

*/

let age: number = 20;
// age = 'a';

if (age < 50)
age += 10;
console.log(age);



let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true
let level; //type any

// level = 1;
// level = 'a'

function render(document: any) {
    console.log(document)
}

let numbers1: number[] = [1,2,3]
let numbers2 = [1,2,3]



let user: [number, string] = [1, 'Mosh'];
user.push(1); // x


//Pascal Case
enum Size { Small = 1, Medium, Large}  //represent list of length of constants
//if const enum it optimizes the code

let mySize: Size = Size.Medium;
console.log(mySize)





function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
    return income * 1.2;
return income * 1.3;
}

// calculateTax(10_000)


//enable these 3 options in tscofig.json
//noUnusedLocals: true
//noUnusedParameters: true
//noImplicitReturns: true