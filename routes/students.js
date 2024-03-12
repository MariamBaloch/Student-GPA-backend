const express = require('express')
const router = express.Router()
const stduentCtrl = require('../controllers/Students')

router.get('/', stduentCtrl.index)
router.get('/:id', stduentCtrl.show)
router.post('/', stduentCtrl.create)

module.exports = router
