const { Schema } = require('mongoose')

const gradeSchema = new Schema(
  {
    score: { type: Number, enum: [0, 1, 2, 3, 4] },
    letter: { type: String, enum: ['A', 'B', 'C', 'D', 'F'] }
  },
  {
    timestamps: true
  }
)

const enrolledCourseSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'Student', require },
    course: { type: Schema.Types.ObjectId, ref: 'Course', require },
    grade: gradeSchema
  },
  {
    timestamps: true
  }
)

module.exports = enrolledCourseSchema
