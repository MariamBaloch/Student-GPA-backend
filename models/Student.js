const { Schema } = require('mongoose')

const studentSchema = new Schema(
  {
    name: { type: String, require },
    email: { type: String, require }
  },
  {
    timestamps: true
  }
)

module.exports = studentSchema
