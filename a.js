// function asyncFn() {
//   return new Promise((resolve, reject) => {
//     let result = "data";
//     let someError = false;
//     if (someError) {
//       reject(someError);
//     } else {
//       resolve(result);
//     }
//   });
// }

// async function getData() {
//   const allPromise = Promise.all(asyncFn, asyncFn);
//   // const result  = await asyncFn();
// }



// const bufferData = Buffer();

// const [a, b, c] = [...arr];

// let ob1 = new Object({});
// let obj2 = {};
// let obj3 = ob3;

// Swap the gender
// id,name,gender,salary

//  update users set gender = "f" where id in (select id where gender = "m")
//  update users set gender = "m" where id in (select id where gender = "f")

//  update users set gender = "f" ()

// Given a positive sorted array
a = [20, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21];
// Define a function f(a, x) that returns x, the next smallest number, or -1 for errors.
function smallNumber(arr, x) {
   
    if(arr.indexOf(x) == -1){
        return -1;
    }
   
  let newSmallNumber = arr[0];
  arr.forEach((element) => {

    if (element < newSmallNumber ) {
      newSmallNumber = element;
    }

  });

  if(newSmallNumber == x){
    return x;
  }
  return -1;
}

console.log(smallNumber(a, 3))

// mysql advance query
// Nodejs deep undestanding
// aws artitecture

// update user set password = (CASE WHEN password = 'pal' THEN 'singh' ELSE 'PAL' END)