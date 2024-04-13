/** Undefined and null  operator are check in this */
let users= {
    student:{
        name:'',
        age:0,
        salary:null
    }
}

console.log(users.student.name ?? 'Unkown');
console.log(users.student.age ?? 21);
console.log(users.student.lastname ?? 'Not available');
console.log(users.student.salary ?? 0 );