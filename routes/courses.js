const express = require('express')
const router = express.Router()
const courseCtrl = require('../controllers/Courses')

router.post('/', courseCtrl.create)

module.exports = router
