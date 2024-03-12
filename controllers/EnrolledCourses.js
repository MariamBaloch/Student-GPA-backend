const { EnrolledCourse, Course } = require('../models')

const getStudentCourses = async (req, res) => {
  try {
    const enrolledCourses = await EnrolledCourse.find({
      student: req.params.studentId
    }).populate('course')

    const coursesIds = await EnrolledCourse.find({
      student: req.params.studentId
    }).distinct('course')

    const courses = await Course.find({
      _id: { $nin: coursesIds }
    })

    res.send({ courses, enrolledCourses })
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
