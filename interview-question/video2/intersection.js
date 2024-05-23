const arr1 = [9,7,2,6,5,4,8,6,4,5,5]
const arr2 = [4,5,6,7,10,11,13]

const intersectionArr = arr1.filter((currElement)=>{
    return arr2.includes(currElement)
})

console.log(intersectionArr);


let str = "my name is rishi, my work is software engineerm my role is team lead:)";

const newStr = str.replace(/my/g,"I am ")
console.log(newStr);