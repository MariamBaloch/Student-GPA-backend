const mongoose = require('mongoose')

const studentSchema = require('./Student')

const Student = mongoose.model('Student', studentSchema)

module.exports = {
  Student
}
