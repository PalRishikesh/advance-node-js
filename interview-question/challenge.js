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

// console.log("largestPrime: ",largestPrime );

/** Remove duplicate from arrray */


const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1,5,1];
const array2 = ['one','two','three','four','five','six','three','four','five'];

const newArray1 = [...new Set(array2)]
// console.log(newArray1);


function removeDuplicates(arr){
    let unique = []
    for (let index = 0; index < arr.length; index++) {
        if(unique.indexOf(arr[index]) == -1){
            unique.push(arr[index]);
        }
        
    }
    return unique;
}
// console.log(removeDuplicates(array2));

/** Guess the output */

const array3 =[1,2,3];
// console.log(array3.length);

array3[50] =50;
// console.log(array3.length) // 51

/** Generate random number alpha */

function generateRandomNumber(){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let strlength = 7;
    let result = '';
    console.log(chars.length);
    for (let index = 0; index < strlength; index++) {
        let mathRandom = Math.random();
        console.log("mathRandom: ",mathRandom);
        console.log("mathRandom char : ",mathRandom * chars.length);
        let randNum = Math.floor(mathRandom * chars.length);
        result += chars.substring(randNum, randNum+1);
        
    }
    return result;
}

// console.log(generateRandomNumber())


 const strFrom = Array.from('testform');
//  console.log(strFrom); // ['t','e',...]

const arrForm = Array.from([1,2,3], x=> x+x);
// console.log(arrForm);


const result = Array.from({length: 10},(v,i)=>i);
// console.log(result); // returning the result from 0 to 9

/** Find the last item from array without length property */
const arryColor = ['red','blue','yellow']
// console.log(arryColor.at(-1));

/** */


function print(x){
    if(x <=1 ){
        print(x+1);
        console.log("x in if block is "+x);
    }
    else if(x >= 1000){
        console.log("x is else if blocks is "+x);
    }
    print(x+1);
}

// print(0) //RangeError: Maximum call stack size exceeded


/** Object descruting */
const objected = {a:10, b:22}
let {a:new_a, b: new_b} = objected; // Here key should be same and new variable is assing with that value and we can asess with new_a and value will be 10

// console.log(new_a);
// console.log(new_b);

let place = 'US';



let department = {[getStudentPlace()]: 'India',[place + "Department"]: "English", standard: 100}


function getStudentPlace(){
    return place;
}

let division = "standard";

let {[getStudentPlace()]: placeDetails,[place + "Department"]: departmentDetails, [division]:standard} = department;

// console.log(department);
// console.log(placeDetails + ' & '+ departmentDetails + ' & '+ standard);

/** Concatenate nested array */

const num1 = [[1],[2]];
const num2 = [3, [4]];
const num3 = 5;

// console.log([[...num1[0], num3],num1[1],...num2]);
// Better way

num1[0].push(num3);
// console.log(num1);
const mergeResult = num1.concat(num3);
// console.log(mergeResult);

/** Question */
const ar = Array(2).fill({}); // fill method, if the first parameter is an object ,each slot in the array will referrence that object.
// console.log(ar);
ar[1].product = "Laptop";
// console.log(ar);


const newArrNum = ['1','2','3','4','5','6','7','8','9','10'].map(parseInt) // use as specified radex (the base in mathematical numeral system)
// const newArrNum = ['1','2','3','4'].map((v)=> parseInt(v))

// console.log(newArrNum);

/** Find the item that exist only once in array */
const doubleArray = [1,2,3,4,5,6,4,7,2,1]
const singeResult = doubleArray.filter((x)=>{
    // console.log("in : ",doubleArray.indexOf(x));
    // console.log("las : ",doubleArray.lastIndexOf(x));
    return doubleArray.indexOf(x) === doubleArray.lastIndexOf(x)
})
// console.log(singeResult);

const simpleArr = ["I want to become"," Good developer","With knowledge"];

// const resultA = simpleArr.map(x=> x.split(" "));
const resultA = simpleArr.flatMap(x=> x.split(" "));
// console.log(resultA);
// Using flat array

// console.log(resultA.flat(3)); // By default take 1 nested array




// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifiyin its length.
// copyWithin(target, start ,end)
const copyArr = [1,2,3,4,5];

const copyResult = copyArr.copyWithin(3,1,-1);
// console.log(copyResult);

// delete console.log(1)

{
    let name = "javascript"
    delete name;
    // console.log(name)
}

// True for all cases excet when the property is an own non-configurable property, in that case false is returned in non-stric mode( should have object with configurable)
const obj = {
    name:{}
};

// Object.freeze(obj); // Its does a shallow freeze

// obj.name.firstName = ' Test';
// console.log(obj.name.firstName); // test

const object = Object.create(
    {subject : 'javascript'},
    {lesson: {value:' Object Assign'}}
)
// console.log(object.propertyIsEnumerable('lesson'));
// console.log(object);
// const copy = Object.assign({},object)
// console.log(copy);

// console.log(Object.is(undefined, undefined));
// console.log(Object.is('test', 'test'));
// console.log(Object.is(NaN, NaN));
// console.log(Object.is({a:1}, {a:1})); // false
// console.log(Object.is(+0, -0)); // false


const mapData = new Map();
mapData['name'] = 'Test';

mapData.set('subject','Javascript');
// console.log(mapData);
// console.log(mapData.has('name'));
// console.log(mapData.has('subject'));
// console.log(mapData.size)

const falsy = new Boolean(false); // is object is geting true value
console.log(falsy);
// console.log([]);
if(falsy){
    if([]) console.log('Array [] is empty');
    if([] == false) console.log('Empty [] is compared with false');
}
else{
    console.log('Falsy is false');
}
