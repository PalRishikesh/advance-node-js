const revInt = (num)=>{
    let  myRevNum = num.toString().split("").reverse().join("");

    if(myRevNum.endsWith('-')){ 
        myRevNum = "-"+myRevNum;
        return parseInt(myRevNum)
        
    }
    return parseInt(myRevNum)
}


console.log(revInt(123));