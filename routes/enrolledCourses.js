const express = require('express')
const router = express.Router()
const enrolledCourseCtrl = require('../controllers/EnrolledCourses')

router.get('/', enrolledCourseCtrl.index)
router.get('/:studentId', enrolledCourseCtrl.getStudentCourses)
router.put('/:id', enrolledCourseCtrl.update)
router.post('/', enrolledCourseCtrl.create)

module.exports = router
