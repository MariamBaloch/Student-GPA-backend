const { Student } = require('../models')

const index = async (req, res) => {
  try {
    const students = await Student.find({})
    res.send(students)
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
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
