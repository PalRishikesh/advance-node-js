// // Write a function that reads multiple files concurrently and returns an 
// // array containing their contents. Ensure proper error handling.


// const fs = require("fs");



// // const firstData = fs.readFile("file1.txt");
// // const secondData = fs.readFile("file2.txt");
// // const thirdData = fs.readFile("file3.txt");


// function customPromise(fnc){
//     return function(...arg){
//         return new Promise((resolve,reject)=>{
//             fnc(...arg,(err,data)=>{
//                 if(err){
//                     reject(err)
//                 }
//                 else{
//                     resolve(data)
//                 }
//             })
            
//         })
//     }
// }

// const getInformation= async(sigleFilePath)=>{
//     // const fileData = customPromise(fs.readFile(sigleFilePath));
//     const fileData = await fs.readFile(sigleFilePath,"utf-8",(err,data)=>{
//         console.log(data);
//     });
//     return fileData;
// }

// function getFileInformation(...filesPath ){

//     let allFileArry = [];
//      for (let index = 0; index < filesPath.length; index++) {
        
//         allFileArry.push(getInformation(filesPath[index]))
        
//      }
    
//     //  return allFileArry;
//     return Promise.all(allFileArry)
    
// }

// getFileInformation("file1.txt","file2.txt","file3.txt")



// input : aaabcccccddaaaabbb

// output : a3b1c5d2a4b3




let str = "aaabcccccddaaaabbb";

function getCountValue(str){
    let strArr = str.split("");
    let variableArray= [];
    let variableValue= [];
    let count=1;
    for (let i = 0; i < strArr.length; i++) {
        // const element = strArr[i];
        if(strArr[i] == strArr[i+1]){
            count++;
        }
        else{
        variableArray.push(strArr[i],count);
        // variableArray.push(count);
        count=1;
        }
        
    }
    console.log(variableArray.join(""));
}

console.log(getCountValue(str));


// export.Handler= (event)=>{

//     let respons =  {
//         state:0,
//         message:"Hello world"
//     }
//     return JSON.parse(respons);
// }

 
 // input ABC
// output ABC ACB BAC BCA CAB CBA

function getCombination(str){
    // console.log(str);
    const strArr = str.split("");
    // console.log(strArr);
    for(let i=0;i<strArr.length; i++){
        let firstValue = strArr[i];
        for(let j=0; j< strArr.length; j++){
            if(i == j) continue;
            firstValue += strArr[j];
        }
        console.log(firstValue);
        firstValue = strArr[i]
        for(let k = strArr.length -1; k >=0; k--){
            if(i ==k ) continue;
            firstValue += strArr[k]
        }
        console.log(firstValue);
    }

}



// getCombination("ABC");



// Input : Hi Good Evening
// Output: iH dooG gninevE

let str1= "Hi Good Evening";
function getReverseChar(str){
    let strA = str.split(" ");
    let outPutString=[];
    for (let i = 0; i < strA.length; i++) {
        const innerArry = strA[i].split("");
        // h,i

        let innerStr="";
        
        for (let j = innerArry.length -1 ; j >=0; j--) {
            innerStr +=innerArry[j];
        }
        outPutString.push(innerStr);// ih
        
    }
    console.log(outPutString.join(" "));
}

// console.log(getReverseChar(str1));