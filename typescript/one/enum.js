/** Enum is like a group of named constant values */
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 0] = "MON";
    DAYS[DAYS["TUE"] = 1] = "TUE";
    DAYS[DAYS["WED"] = 2] = "WED";
    DAYS[DAYS["THU"] = 3] = "THU";
    DAYS[DAYS["FRI"] = 4] = "FRI";
    DAYS[DAYS["SAT"] = 5] = "SAT";
    DAYS[DAYS["SUN"] = 6] = "SUN";
})(DAYS || (DAYS = {}));
console.log(DAYS.FRI);
function testingFun(value) {
    if (value == DAYS.MON) {
        console.log("Welcome to First day of the week");
    }
}
testingFun(DAYS.MON);
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 0] = "PENDING";
    orderStatus[orderStatus["DISPATCH"] = 1] = "DISPATCH";
    orderStatus[orderStatus["DELIEVERD"] = 2] = "DELIEVERD";
})(orderStatus || (orderStatus = {}));
var order;
order = {
    title: "Mobile",
    price: 10000,
    date: new Date(),
    statu: orderStatus.DISPATCH
};
console.log(order);
