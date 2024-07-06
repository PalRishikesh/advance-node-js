//const coding = ["js","ruby","java","python","cpp"];

//  Will not return the value in foreach 
// const values = coding.forEach((item)=>{
//     return item;
// })

// console.log(values);


const nums = [1,2,3,4,5,6,7,8,9,10];
// Filter will return the values
//const newNum = nums.filter((num) => num > 4);
// wile using {} we have to explicity use return 
const newNum = nums.filter((num)=>{
    return num > 4
})
// console.log(newNum);


const newForeach = [];
nums.forEach((num)=>{
    if(num > 4){
        newForeach.push(num);
    }
})

// console.log(newForeach);


const books = [
    {title : "Book One", genre: 'fiction', publish:1981, edition: 2014},
    {title : "Book Two", genre: 'Non - fiction', publish:1921, edition: 2024},
    {title : "Book Three", genre: 'history', publish:1992, edition: 2015},
    {title : "Book Four", genre: 'scienece', publish:1999, edition: 2008},
    {title : "Book Five", genre: 'history', publish:2011, edition: 2014},
];

let userBooks = books.filter((book)=>{
    return book.genre == 'history'
})

userBooks = books.filter((bk) => {
    return bk.publish >= 1992  && bk.genre == 'history'
})

console.log(userBooks);



