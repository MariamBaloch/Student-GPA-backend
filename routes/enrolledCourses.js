const express = require('express')
const router = express.Router()
const enrolledCourseCtrl = require('../controllers/EnrolledCourses')

router.get('/:studentId', enrolledCourseCtrl.getStudentCourses)
router.post('/', enrolledCourseCtrl.create)

module.exports = router
