/** A prime number is a whole number greater than 1.
 *  It has exactly two factors, that is, 1 and the number itself. 
 *  Ther is only one even prime number, that is 2.
 */

/** Composite number other than prime number.  */
let num = 17;

let isPrimeNumber = true;

for (let index = 2; index < num; index++) {
    if(num %2 ==0){
        isPrimeNumber = false;
    }
}

if(isPrimeNumber == true){
    console.log("The number is a prime number");
}
else{
    console.log("The number is not a prime number");
}