const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

before(done => {
    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true })

    mongoose.connection
        .once("open", () =>{
            console.log("Conected")
            done();
        })
        .on("error", error => {
            console.log('Error : ', error);

        });
})

beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        console.log('Collection is droped success!'); 
    });
    done();
})