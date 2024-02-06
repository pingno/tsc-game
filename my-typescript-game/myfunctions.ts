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


export {}