const { Course } = require('../models')

const create = async (req, res) => {
  try {
    const course = await Course.create(req.body)
    res.send(course)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  create
}
