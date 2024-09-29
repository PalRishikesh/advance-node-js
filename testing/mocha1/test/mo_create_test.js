const Student = require("../app/model/student");
const assert = require("assert");


describe('Create test',()=>{
   

    it('Create a user in DB',(done)=>{

        const user = new Student({name:"Rishikesh"});

        user.save()
        .then(()=>{
            assert(!user.isNew) // isNew will return false if data is inserted
            done()
        })
        .catch(()=>{
            console.log("error")
            done()
        })
       
    })
})


