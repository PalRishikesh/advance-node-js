
function getEmail(firstName, lastName){
    // Will return undefined undefined becuase this can use only in object not on separete function
    return `${firstName}.${lastName}@test.com`
}

// Exmple 1
let student = {
    first_name:'Rishi',
    last_name:'Pal',
    age:20,
    getEmail:function(){
        return `${this.first_name}.${this.last_name}@test.com`
    }
    // getEmail:getEmail(this.first_name, this.last_name)
}

// console.log(student.getEmail());

// Exmple 2
let teacher = {
    first_name:'Raj',
    last_name:'Singh',
    age:40,
    // getEmail:function(){
    //     return `${this.first_name}.${this.last_name}@test.com`
    // }
}

/** We are declaring getEmail fuction again and again */
// console.log(teacher.getEmail());
/** Here we are assing student function to teacher object with the help of call method */ 
// console.log(student.getEmail.call(teacher));


function getEmailId(){
    return `${this.first_name}.${this.last_name}@test.com`
}

function choseSubject(subject1, subject2){
    console.log(subject1, subject2);
}

// console.log(getEmailId.call(student));
// console.log(getEmailId.call(teacher));

// console.log(getEmailId.call(student));
// choseSubject.call(teacher,"Maths","Science")


/** In call method we can pass single variable and in apply method we can pass array */

function choseSubjectApply(subject1, subject2){
    console.log(subject1, subject2);
}

// choseSubjectApply.apply(teacher,["Maths","Geography"])
// console.log(student.getEmail.apply(teacher)); // This is also work as there is no paramter require

/** Bind */
/** We can create function and use later on when needed */
let callAnotherTimeBind = getEmailId.bind(teacher); // we can use here also by () function invocation
// console.log(callAnotherTimeBind());

/** Carry output is same for all */
/** We can create new variable in function and assign value so that it will have its own property */

function getEmailIdUpdated(){
    return this.email_id = `${this.first_name}.${this.last_name}@test.com`
}
console.log(getEmailIdUpdated.call(teacher));
// console.log(teacher);

function choseSubjectApply(subject1, subject2){
    
    console.log(subject1, subject2);
    return this.subjects = [subject1, subject2]
}

choseSubjectApply.apply(teacher,["Math","Hindi"])
console.log(teacher);


