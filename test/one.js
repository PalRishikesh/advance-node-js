// let greeting = "say Hi";
//     if (true) {
//         let greeting = "say Hello instead";
//         console.log(greeting);
//     }
//     console.log(greeting);

    //say Hello instead, say Hi


//     const greeting = {
//         message: "say Hi",
//         times: 4
//     }
 
// greeting.message = "say Hello instead";
 
// console.log(greeting)
//


// console.log(1 +  "2" + "2"); // 32
// console.log(1 +  +"2" + "2"); // 32
// console.log(1 +  -"1" + "2"); // 32
// console.log(+"1" +  "1" + "2"); // 22
// console.log( "A" - "B" + "2"); // A - B2
// console.log( "A" - "B" + 2); //  A-B2




function getData(){


    setTimeout(()=>{
        console.log("This is data ");
    },1000)

}

// getData();


function customErroHandler(req,res, next){

    if(req.body === "some"){
        // return new Error("Some thing went wrong in rquest...");
        return res.json({
            data:[],
            status:1,
            message: "error"
        }).status(422)
    }
    next();
}
// exe, swapn