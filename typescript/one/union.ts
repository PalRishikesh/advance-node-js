/** Union means asingin more than 1 type on variable */


// Using only string
let userId: string = 'AB123456';
function displayUserId(userId: string): string{
    console.log("user id: ",userId);
    return userId;
}

// Using variable
let userId2: (string | number) = "ABCD";
userId2  = 456784504; // This will also work
// userId2 = true; // This will not work ( you can put boolean in declaration)
// For above we have call function with union only, only sting or number will not work

function displayUserId2(userId: string | number): string | number{
    if(typeof userId === "string"){
        console.log(userId.toUpperCase());
    }
    return userId
}

// Array
let myArray:(string | number)[] = ["one",1];







