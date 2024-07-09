
let arr = [8,9,7,5,4,8,1,3];

// We cannot use break and return in foreach unlike for each
// arr.forEach((v,i,arr)=>{
//     console.log(v,i);
// })


// Map , it will return new array in a tranform form, as well as method chainng is possible

// let nA= arr.map((v)=> v*2)
// console.log(nA);

// arr.map(v=>v*2).forEach(v=>console.log(v))

//filter it will return the base on conditino into new arrray, search something from list 

const nfiArr= arr.filter((v)=> {
    return v%2 == 0
})

// console.log(nfiArr);

const uniqArr = arr.filter((value,index)=>{
    // console.log(value, index);
    return arr.indexOf(value) === index// Geting only first findex returing true other wise false
})
// console.log(uniqArr);

// find is same like filter, but only find first elemetn

const findfiArr= arr.find((v)=> {
    return v%2 == 0
})
// console.log(findfiArr); // 8

//


// Reduce
const sumA= arr.reduce((acc,val)=>{
    return acc = acc + val;
},0)

console.log(sumA);


let arr1  =[1,2,[5,6,[7,8,9,[11]]]]

// var flatArr = arr1.reduce((a,b)=>{
//     return a.concat(b)
// },[])


// let flatArray = arr1.reduce((acc, curVal) => {
    
//     if(Array.isArray(curVal)){
//         for (const item of curVal) {
//             acc = acc.concat(item)
//         }
//     }
//     else{
//         acc.push(curVal)
//     }
//     return acc;
// }, []);
// console.log(flatArray);


