const mongoose = require('mongoose')

const studentSchema = require('./Student')
const courseSchema = require('./Course')

const Student = mongoose.model('Student', studentSchema)
const Course = mongoose.model('Course', courseSchema)

module.exports = {
  Student,
  Course
}
