
    var x= Math.floor(Math.random());
    if(x > 0.5){
        var x=1;
    }
    else{
        var x=2;
    }
    // console.log(x);
    
    let arr = [[0,1],[2,4],[[5,6]]];

    const flattendArr = arr.reduce((prev,currn)=>{
        return prev.concat(currn);
    },[])
    // console.log(flattendArr);


    const arr1=[4,5,7,9,13,17,97,47];

    function isPrime(number){
        if(number < 2 && number %2 == 0) return false;
        const squareRoot = Math.sqrt(number);
        console.log("squareRoot: ",squareRoot,number);
        
        for (let i = 3; i <=squareRoot ; i++) {
            if(number % i == 0) return false;
        }
        return true;
    }
    
    // console.log(arr1.sort((a,b)=> a-b).find(isPrime));

    const result =['3','2','1'].map(parseInt);
    // Map have 3 argument where as pareseInt have 2 argumnet
    // parseInt(1,0)
    // parseInt(2,1)
    // parseInt(2,2)
    // console.log(result);
    //[ 1, NaN, NaN ]
    // Desc: [ 3, NaN, 1 ]

    // Find the items only exist once

    const arr3 = [1,2,3,4,5,6,2,3,5,6,7,8];

    const result3 = arr3.filter(function(v){
        return arr3.indexOf(v) == arr3.lastIndexOf(v);
    });
    // console.log(result3);

    const arr4 = ['I want to become','a front end','developer'];
    // const word4 = arr4.join(' ')
    // console.log(word4.split(' '));

    const result4 = arr4.flatMap(x=> x.split(' '))
    // console.log(result4);
    
    
    

    
    
