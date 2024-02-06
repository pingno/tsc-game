//without infering the datatype the default datatype will be any
//can cause issues in the future


function addTwo(num: number){
    // return num + 2
    return "hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function singUpUser(name: string, email: string, isPaid: boolean){}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
//default value for isPaid boolean


addTwo(5)
getUpper("peang")
singUpUser("peang", "sheesh@gmail.com", true)
loginUser("h", "h@H.com")



// function getValue(myVal: number){
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }


//assigning datatype for return value of an arrow function
const getHello = (s: string, ):string => {

    return ""
}

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]


//typescript is aware of context and will understand the context of the datatype
heros.map(hero => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg)
}


//void / never 
//never will never return a value
function handleError(errmsg: string): void{
    console.log()
}

export {}