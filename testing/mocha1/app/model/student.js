const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const studentScheam = new Schema({
    name:String
})

const Student = mongoose.model('student',studentScheam);

// export
module.exports = Student;