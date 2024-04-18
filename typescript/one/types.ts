
// Explicit annotate
let userName: string = "Uttam";

// Implicit annotate
let password = "abc@123";


let address: string;
address = "123 Main St";

let age = 20;
let salary: number = 2550.50
let isActive = true;

let userDetails = `User is a programmer`;


console.log(typeof age)
console.log(typeof address)
console.log(typeof salary)
console.log(typeof isActive)
console.log(typeof userDetails)

/** */
// Making intentional absense of value using null (its a falsy value)
let myName:null = null;
console.log(myName);
console.log(typeof myName ); // Object

// Default value of variable is uninitialized

let lastName;
console.log(lastName);
console.log(typeof lastName); // undefined (its a falsy value)

// If we don't know the data type like fetching some data from api we can use any types
// Its a skiping of type

let networkData:any ={
    productName: "Samsung TV",
    price: 32541,
    discountPrice: 2345
}

console.log(networkData.productName);
console.log(networkData.isActive); // undefined // This key is not available

