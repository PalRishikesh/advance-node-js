/** Enum is like a group of named constant values */

enum DAYS{
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
}
console.log(DAYS.FRI);

function testingFun(value:DAYS){
    if(value == DAYS.MON){
        console.log("Welcome to First day of the week");
        
    }
}
testingFun(DAYS.MON)    


enum orderStatus{
    PENDING,
    DISPATCH,
    DELIEVERD
}

let order:{title: string, price: number,date: Date, statu:orderStatus}

order = {
    title: "Mobile",
    price: 10000,
    date: new Date(),
    statu: orderStatus.DISPATCH
}
console.log(order);
