// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const arr = [
  {
    name: "rahul",
    age: 20
  },
  {
    name: "akash",
    age: 22

  },
  {
    name: "varun",
    age: 25

  },
  {
    name: "varun",
    age: 2
  },
];


const arrNum = [
    {
      name: 20,
    },
    {
      name: 2,
    },
    {
      name: 10,
    },
    {
      name: 5,
    },
  ];

const sorted = arr.sort((a, b) =>{
    return a.name.localeCompare(b.name) || a.age  - b.age 
});

const sortedNum = arrNum.sort((a,b)=> a.name - b.name) // Only Number
// console.log(sorted)




// let a = [];

// for(let i=0; i< arr.lenght; i++){
//   set.add(arr[i]);
// }


const obj = {};

// Adding key's to object to avoid duplicate contains
for(let i=0; i<arr.length; i++){
    obj[arr[i]['name']] = arr[i];
}
console.log(obj);

const newArr = [];

for(const key in obj){
    newArr.push(obj[key])
}

console.log(newArr);


const filterData = arr.filter((single,i,self) => {
    // console.log(self);
    return self.findIndex(selfSingle => (selfSingle.name === single.name)) == i
})



// AWS step function, cloud formation, large function, etc
