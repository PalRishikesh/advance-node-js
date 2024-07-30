/** Undefined and null  operator are check in this */
let users= {
    student:{
        name:'',
        age:0,
        salary:null
    }
}

console.log(users.student.name ?? 'Unkown',users.student.name );
console.log(users.student.age ?? 21, users.student.age);
console.log(users.student.lastname ?? 'Not available',users.student.lastname);
console.log(users.student.salary ?? 0 ,users.student.salary );