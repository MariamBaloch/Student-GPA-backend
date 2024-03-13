const { Student, EnrolledCourse } = require('../models')
const mongoose = require('mongoose')

const index = async (req, res) => {
  try {
    let students = await Student.find({})

    const overallGPA = await EnrolledCourse.aggregate([
      {
        $group: {
          _id: '$student',
          totalScore: { $sum: '$grade.score' },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          student: '$_id',
          overall: { $divide: ['$totalScore', '$count'] }
        }
      }
    ])

    students = students.map((student) => {
      const gpaData = overallGPA.find((item) =>
        item.student.equals(student._id)
      )

      return {
        _id: student._id,
        name: student.name,
        email: student.email,
        createdAt: student.createdAt,
        updatedAt: student.updatedAt,
        gpa: gpaData ? Math.round(gpaData.overall * 100) / 100 : null
      }
    })

    res.send(students)
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id)
    console.log(req.params.id)
    const overallGPA = await EnrolledCourse.aggregate([
      {
        $match: { student: student._id }
      },
      {
        $group: {
          _id: '$student',
          totalScore: { $sum: '$grade.score' },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          student: '$_id',
          overall: { $divide: ['$totalScore', '$count'] }
        }
      }
    ])

    student = {
      _id: student._id,
      name: student.name,
      email: student.email,
      createdAt: student.createdAt,
      updatedAt: student.updatedAt,
      gpa: overallGPA[0] ? Math.round(overallGPA[0].overall * 100) / 100 : null
    }
    res.send(student)
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  try {
    const student = await Student.create(req.body)
    res.send(student)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  create,
  show
}
