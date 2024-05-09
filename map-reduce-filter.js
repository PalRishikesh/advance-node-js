

/** Difference */

/** The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the  array. (the first array.) */
/** The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. */
/**  The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.*/

const companies = [
    {name:"Google",category:"Product Based", start: 1981, end: 2004},
    {name:"Amazon",category:"Product Based", start: 1992, end: 2001},
    {name:"Paytm",category:"Product Based", start: 1984, end: 2002},
    {name:"Coforge",category:"Service Based", start: 1990, end: 2024},
    {name:"Mindtree",category:"Service Based", start: 1989, end: 20014},
]

const ages = [33,23,23,54,12,87,45,12,14,69,54,21,22,23]

// companies.forEach((singleCompany, index)=>{
//     console.log(singleCompany);
// })

/** One linear */

// companies.forEach((singleCompany, index)=> (console.log(singleCompany)))

/** Filter */

const above30Age = ages.filter((age)=>{
    if(age > 30){
        return true;
    }
})
// console.log(above30Age);

// Single linear
const above30AgeSingleLiner = ages.filter((age)=> (age>30));
// console.log(above30AgeSingleLiner);

const serviceBase = companies.filter((singleCompnay)=>{
    if(singleCompnay.category === "Service Based"){
        return true;
    }   
})
// console.log(serviceBase);
const serviceBaseSingleLiner = companies.filter((singleCompnay) => singleCompnay.category === "Service Based")
// console.log(serviceBaseSingleLiner);

/** Map  */
const dump = companies.map((singleCompnay, index)=>{
    return `${singleCompnay.name} ${singleCompnay.category}`
})

// console.log(dump);

const sortedData = companies.sort((c1, c2)=>{
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
});

// console.log(sortedData);

const sortedDataLiner = companies.sort((c1, c2)=> (c1.start > c2.start ? 1 : -1))
// console.log(sortedDataLiner);

const sortedAge = ages.sort((a,b)=> (a-b))
// Or
// const sortedAge = ages.sort((a,b)=> a > b ? 1 : -1 )
// console.log(sortedAge);

const sumAges = ages.reduce((prev,current)=>{
    return prev + current;
})
console.log(sumAges);

const sumAgeLiner = ages.reduce((prev,curr)=> prev+curr)
console.log(sumAgeLiner);