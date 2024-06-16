var arr = [
  "a",
  "b",
  "c",
  "d",
  "d",
  "e",
  "a",
  "b",
  "c",
  "f",
  "g",
  "h",
  "h",
  "h",
  "e",
  "a",
];
// Output {"a":3,"b":2,...}

function objectFromArrayWithCount(arr) {
  const obj = {};
  for (let index = 0; index < arr.length; index++) {
    // if(!obj[arr[index]]){
    //     obj[arr[index]] = 1
    // }
    // else{
    //     obj[arr[index]] = obj[arr[index]] + 1;
    // }

    // Sortest version
    obj[arr[index]] == undefined
      ? (obj[arr[index]] = 1)
      : (obj[arr[index]] += 1);
  }
  return obj;
}

// console.log(objectFromArrayWithCount(arr));

// Make async function run after 10 second

function promiseFunctionWithDelay(millsecond = 5000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sucess");
    }, millsecond);
  });
}

async function testPromise() {
  const data = await promiseFunctionWithDelay();
  console.log(data);
}

// testPromise()

function callingFetchAPI() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => data.json())
    .then((result) => console.log("result : ", result));
}

// callingFetchAPI().

async function asyncCallingFetchAPI() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(await fetchData.json());
}

// asyncCallingFetchAPI();

const input = "Welcome to smartsense";
// Output:- "emocleW ot esnestrams"

function reverserChar(input) {
  let newReverString = "";
  let wordSplit = input.split(" ");

  for (let i = 0; i < wordSplit.length; i++) {
    let singleWords = wordSplit[i];
    for (let j = singleWords.length - 1; j >= 0; j--) {
      newReverString += singleWords[j];
    }
    newReverString += " ";
  }
  return newReverString;
}

// console.log(reverserChar(input));

function runFunc() {
  console.log("1" + 5); //15
  console.log(1 + "5"); //12
  console.log(2 + 1 + "5"); //35
  console.log("A" - 1); //NaN
  console.log(1 - "A"); // NaN
  console.log(2 + "-2" + "2"); // 2 -22
  console.log(typeof null); // Object
  console.log(typeof typeof null); // string
}

// runFunc();

/*
(function(){
    setTimeout(()=> console.log(1),101);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
    // 2,4,3,1
    })();
*/

function test() {
  x = 330;
  console.log(x);
  var x;
}
// test();  // If x=330 will print is not given this value will print undefined


