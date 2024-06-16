const arr = [5,6,5,8,9,11,0,-10, 25,98];

const getSmallestArrElem = (arry)=> arry.reduce((smallNum, num)=> Math.min(smallNum, num)); // Math.max

console.log(getSmallestArrElem(arr));