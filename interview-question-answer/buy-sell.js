let prices  = [7,1,2,5];

let allPrice  = [];

for (let index = 0; index < prices.length-1; index++) {
    
    let buyPrice = prices[index];
    let maxPrice = 0 ;
    for (let j = index+1; j < prices.length; j++) {
        maxPrice = Math.max(maxPrice, prices[j]);
    }
    // console.log(maxPrice,buyPrice);
    let profit = maxPrice - buyPrice;
    allPrice.push(profit);
}
// console.log(allPrice);

let maxProfit = allPrice[0];

for (let index = 0; index < allPrice.length; index++) {
    maxProfit = Math.max(maxProfit, allPrice[index])   
}
if(maxProfit < 0 || allPrice.length == 0){
    maxProfit = 0
}
// console.log(maxProfit);

console.log("fdfsd");


// // Two pointer approach
// let max = 0;

// let buyIndex = 0;
// let sellIndex = 1;

// while(sellIndex < prices.length){

//     // If buying value is greater the sell value, bring buy index value to sell index value
//     if(prices[buyIndex] > prices[sellIndex]){
//         buyIndex = sellIndex;
//     }
//     let profit = prices[sellIndex] - prices[buyIndex];
//     console.log(profit);
//     max = Math.max(max, profit);
//     sellIndex++;
// }

// console.log(max);
// return max;





// Custom way

let maxProfitPrice = 0;

let buyPriceIndex = 0
let sellPriceIndex = 0;

while(sellPriceIndex < prices.length){
    
    if(prices[buyPriceIndex] > prices[sellPriceIndex]){
        buyPriceIndex = sellPriceIndex;
    }
    let profit =  prices[sellPriceIndex] - prices[buyPriceIndex];
    maxProfitPrice = Math.max(maxProfitPrice, profit);
    sellPriceIndex++;
}
console.log(maxProfitPrice);
