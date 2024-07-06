const myNums = [1,2,3];

const myTotal1 = myNums.reduce(function(acc, currval){
    return acc + currval;
},0)

// console.log(myTotal1);


const myTotal2 = myNums.reduce((acc, curr) => (acc + curr),0)

// console.log(myTotal2);


const shoppingCart = [
    {itemName:"js course", price: 199},
    {itemName:"java course", price: 299},
    {itemName:"mobile course", price: 599},
    {itemName:"AI course", price: 1028},
    {itemName:"Web course", price: 2024}
]

const totalAmount  = shoppingCart.reduce((acc, item) => acc+ item.price,0);

console.log(totalAmount);