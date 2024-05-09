let question =  [
    {
        key:'Sample1',
        data:'Data1'
    },
    {
        key:'Sample1',
        data:'Data1'
    },
    {
        key:'Sample2',
        data:'Data 2'
    },
    {
        key:'Sample 2',
        data:'Data1 2'
    },
    {
        key:'Sample 2',
        data:'Data 2'
    },
    {
        key:'Sample 3',
        data:'Data 3'
    },
    {
        key:'Sample 3',
        data:'Data 3'
    }
]

// output group by key name
// let { "sample 1":[{ key :" sample 1", data: "data1" }] }
// const output = {}

// question.forEach((singleQuestion)=>{
//     if(output[singleQuestion.key]){
//         output[singleQuestion.key].push(singleQuestion)
//     }
//     else{
//         output[singleQuestion.key] = [singleQuestion]
//     }
// })

// console.log(output);

/** By reduce method */

const groupOutput = question.reduce((accumulator, currentQuesition)=>{
    if(accumulator[key]){
        accumulator[key].push(currentQuesition)
    }
    else{
        accumulator[key] = [currentQuesition]
    }
    return accumulator;

},{})

console.log(groupOutput);