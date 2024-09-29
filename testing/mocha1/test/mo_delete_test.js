const Student = require("../app/model/student");
const assert = require("assert");



describe('Delte tests',()=>{
    let deleter;
    beforeEach((done)=>{
        deleter = new Student({name:"delete"})
        deleter.save()
        .then(()=>{
            done();
        })
    })

    it('Deleting test for deleter',(done)=>{
           Student.findByIdAndDelete(deleter._id)
           .then(()=>   Student.findOne({name:"delete"}))
           .then(student => {
            assert(student === null);
            done()
           }) 
    })
})


describe('Update tests',()=>{
    let updater;
    beforeEach((done)=>{
        updater = new Student({name:"updater"})
        updater.save()
        .then(()=>{
            done();
        })
    })

    it('Set n Save test',(done)=>{
           updater.set("name","upUpdater");
           updater
           .save()
           .then(() => Student.find({}))
           .then(students => {
            assert(students[0].name != 'updater')
            assert(students[0].name === 'upUpdater')
            done()
           })
    })
})