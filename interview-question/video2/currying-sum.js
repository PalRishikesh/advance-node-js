
function getSum(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                   return a+b+c+d+e;
                }
            }
        }
    }
}

// one liner
const getSum1 = (a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e;
\

 const total = getSum(5)(4)(3)(2)(1);
 console.log(total);