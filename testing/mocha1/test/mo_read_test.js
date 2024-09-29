const Student = require("../app/model/student");
const assert = require("assert");


describe('Read tests',()=>{
    let reader;

    beforeEach((done)=>{
        reader = new Student({name:"Rishikesh"});
        reader.save()
        .then(()=>{
            done();
        })

    })

    it('Read a user',(done)=>{
        Student.find({name:"Rishikesh"})
        .then((studentData)=>{
            assert(reader._id.toString() == studentData[0]._id.toString())
            done()
        })
        .catch(()=>{
            console.log("Error");
            assert(false);
            done()
        })
    })
})