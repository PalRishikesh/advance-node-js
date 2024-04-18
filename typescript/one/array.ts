// syntax
/** let arrayName: type []; */
// Example
let num: number[] =[1,2,3,4,5,6]

// Example 2
let num2: Array<number> = []

let numbers:number[] = [12,45,67,21];
console.log(numbers);
console.log(numbers[0]) // 12
// we can update the value
numbers[0] = 100;
console.log(numbers); // [100,45,67,21]

let friends: string[];
friends = ["Abigail", "rakesh", "ramesh", "suresh"]; // we can't store number
console.log(friends);
console.log(friends.length);

// push and get length
let newLenght:number = friends.push("Raju");
console.log("New length ",newLenght);
console.log(typeof friends); // object


console.log(friends.join("----")); //Abigail----rakesh----ramesh----suresh----Raju

friends.forEach((friend, index)=>{
    console.log(index,friend.toUpperCase());
    
})

// Map will return the array
let newFriends:string[] = friends.map((friend)=>{
    return friend.toUpperCase();
})
console.log(newFriends);



