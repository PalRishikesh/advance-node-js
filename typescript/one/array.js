// syntax
/** let arrayName: type []; */
// Example
var num = [1, 2, 3, 4, 5, 6];
// Example 2
var num2 = [];
var numbers = [12, 45, 67, 21];
console.log(numbers);
console.log(numbers[0]); // 12
// we can update the value
numbers[0] = 100;
console.log(numbers); // [100,45,67,21]
var friends;
friends = ["Abigail", "rakesh", "ramesh", "suresh"]; // we can't store number
console.log(friends);
console.log(friends.length);
// push and get length
var newLenght = friends.push("Raju");
console.log("New length ", newLenght);
console.log(typeof friends); // object
console.log(friends.join("----")); //Abigail----rakesh----ramesh----suresh----Raju
friends.forEach(function (friend, index) {
    console.log(index, friend.toUpperCase());
});
// Map will return the array
var newFriends = friends.map(function (friend) {
    return friend.toUpperCase();
});
console.log(newFriends);
