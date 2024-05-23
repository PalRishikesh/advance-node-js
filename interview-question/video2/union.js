const arr1 = [9,7,2,6,5,4,8,6,4,5,5]
const arr2 = [4,5,6,7,10,11,13];


const getUnion = ()=>{
    let oneArr = [...arr1, ...arr2];
    return [...new Set(oneArr)];
}

console.log(getUnion().sort((a,b)=>a-b).reverse())