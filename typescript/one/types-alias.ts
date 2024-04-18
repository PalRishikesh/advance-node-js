/** Creating Temp name of type */
// Suppose we don't want to use string type

type xyz = string;

let address: xyz = "Mumbai";

console.log(typeof address); // string

// With union

type alphNum = string | number;

let password: alphNum;

password = "ABCD24424"
// password = 123465;

console.log(typeof password);

type OrderType = {
    title: string,
    price: number,
    status: string
}

let order: OrderType;
order = {
    title:"This is title of order",
    price: 1000,
    status: "pending",
}
