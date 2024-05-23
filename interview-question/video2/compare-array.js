const arr1 = [4,8,10,9,5];
const arr2 = [5,10,9,8,4];
// loop inside loop, check 1 loop value should be present in second loop, if not return false
// if all values are present in second loop return true

// arr1.every((val) => arr2.includes(val));

const isSame = arr1.length == arr2.length &&
arr1.every((currentElement)=>{
    if(arr2.indexOf(currentElement) > -1){
        return (currentElement = arr2[arr2.indexOf(currentElement)])
    }
})

console.log(isSame);