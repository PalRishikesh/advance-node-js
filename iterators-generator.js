// Iterators
/** In JS an iterator is an object which defines a sequence and potentially a return a value upon its termination. */

// Iterators and Generators
/** Iterators and generators bring the concept of iteration direclty into the core language and 
 *  provide a mechanism for customizing the behavior of for/of loops
 */
/** A generator is a function that can stop midway and then continue from where it stopped. */


// Iterators

function makeIteratorFunction(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationCount = 0;

    return {
        next(){
            let result;
            if(iterationCount < end){
                result = { value: nextStart, done: false }
                nextStart += step;
                iterationCount++;
                return result;
            }
            return  { value:nextStart, done: true }
        }
    }

}


const myIterator = makeIteratorFunction(10,10,2);
let result = myIterator.next();

while(!result.done){
    // console.log(result.value);
    result = myIterator.next();
}

/** Generator Functions */
/** While custom iterators are a useful tool, their creation requires careful programing du to the need to explicity
 *  maintain their internal state.*/
/** Generator functions provide a powerful alternative, they allow you to define an iterative algorithm by writing a single function
 *  whose execution is not continuous, but yields a sequence of values one at a time.
 */

// basic generic function

function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
    yield 14;
    yield 16;
}

// console.log(count());
const even = count();
for(const v of even){
    // console.log(v);
}

/** Normal iterator function */
function* makeIteratorGeneator(start, end, stepSize= 1){
    for(let i= start; i<= end; i += stepSize){
        yield i;
    }
}

const myIteratorGeneator = makeIteratorGeneator(1,10,2)

for(const val of myIteratorGeneator){
    console.log(val);
}



/** An Iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties */
/** The next() method returns an object with two properties: value and done*/
/** The value property contains the next value in the iteration and done is a boolean indicating whether the iteration is complete. */