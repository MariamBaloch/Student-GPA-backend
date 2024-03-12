const { EnrolledCourse } = require('../models')

const getStudentCourses = async (req, res) => {
  try {
    const courses = await EnrolledCourse.find({
      student: req.params.studentId
    }).populate('course')
    res.send(courses)
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  try {
    const enrolledCourse = await EnrolledCourse.create(req.body)
    res.send(enrolledCourse)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create,
  getStudentCourses
}
