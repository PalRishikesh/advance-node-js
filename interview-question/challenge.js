var x = Math.floor(Math.random())

if(x > 0.5){
    var x = 1;
}
else{
    let x = 2;
}
// console.log(x);
// console.log(Math.random());

const arr1 = [[1,2],[3,4]];
const flattendArr = arr1.reduce((previousValue, currentValue)=>{
    return previousValue.concat(currentValue)
},[])

// console.log("flattendArr: ",flattendArr);


function isPrime(number){
    if(number < 2){
        return false;
    }

    for (let index = 2; index <= Math.sqrt(number); index++) {
        if(number % index === 0){
            return false;
        }
        
    }
    return true;
}

function largestPrimeInArray(array) {
    let largestPrime = null;

    for (const num of array) {
        if(isPrime(num)){
            if( largestPrime === null || num > largestPrime){
                largestPrime = num;
            }
        }
    }
    return largestPrime;
}





const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const largestPrime = largestPrimeInArray(array);

console.log("largestPrime: ",largestPrime );