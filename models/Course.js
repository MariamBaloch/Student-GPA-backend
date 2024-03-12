const { Schema } = require('mongoose')

const courseSchema = new Schema(
  {
    name: { type: String, require }
  },
  {
    timestamps: true
  }
)

module.exports = courseSchema
