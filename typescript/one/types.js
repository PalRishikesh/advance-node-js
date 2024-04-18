// Explicit annotate
var userName = "Uttam";
// Implicit annotate
var password = "abc@123";
var address;
address = "123 Main St";
var age = 20;
var salary = 2550.50;
var isActive = true;
var userDetails = "User is a programmer";
console.log(typeof age);
console.log(typeof address);
console.log(typeof salary);
console.log(typeof isActive);
console.log(typeof userDetails);
/** */
// Making intentional absense of value using null (its a falsy value)
var myName = null;
console.log(myName);
console.log(typeof myName); // Object
// Default value of variable is uninitialized
var lastName;
console.log(lastName);
console.log(typeof lastName); // undefined (its a falsy value)
// If we don't know the data type like fetching some data from api we can use any types
// Its a skiping of type
var networkData = {
    productName: "Samsung TV",
    price: 32541,
    discountPrice: 2345
};
console.log(networkData.productName);
console.log(networkData.isActive); // undefined // This key is not available
