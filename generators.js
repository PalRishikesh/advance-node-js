function* simpleGenerator(){
    console.warn("Function called");
    yield 20
    console.log("console.log data");
    yield 30
    yield 40
    yield "Last Step"
    let y = "Other";
    yield y;
}
// simpleGenerator() // Normal calling function
/** Running second time will not executre first yeild */
/** Generator calling function */

let sG = simpleGenerator();
// console.log(sG.next()); /** done key will let you know there is no value present */
// console.log(sG.next());
// console.log(sG.next().value);
// console.log(sG.next());
// console.log(sG.next());
// console.log(sG.next());

function* generateId(){
    let i= 1000;
    while(true){
        i++;
        yield i;
    }
}

let gId = generateId();

function getNewId(){
    console.log(gId.next().value);
}
/** On every function click */
getNewId();
getNewId();