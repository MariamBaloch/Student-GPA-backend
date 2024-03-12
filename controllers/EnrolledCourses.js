const { EnrolledCourse, Course } = require('../models')

const index = async (req, res) => {
  try {
    const enrolledCourses = await EnrolledCourse.find({}).populate([
      'course',
      'student'
    ])
    res.send(enrolledCourses)
  } catch (error) {
    console.log(error)
  }
}

const getStudentCourses = async (req, res) => {
  try {
    const enrolledCourses = await EnrolledCourse.find({
      student: req.params.studentId
    }).populate(['course', 'student'])

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
    enrolledCourse.grade = { score: 1, letter: 'D' }
    await enrolledCourse.save()
    res.send(enrolledCourse)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  create,
  getStudentCourses
}
