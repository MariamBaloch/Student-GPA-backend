const mongoose = require('mongoose')

const studentSchema = require('./Student')
const courseSchema = require('./Course')
const enrolledCourseSchema = require('./EnrolledCourse')

const Student = mongoose.model('Student', studentSchema)
const Course = mongoose.model('Course', courseSchema)
const EnrolledCourse = mongoose.model('EnrolledCourse', enrolledCourseSchema)

module.exports = {
  Student,
  Course,
  EnrolledCourse
}
