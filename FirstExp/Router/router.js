const express = require('express')
const router = express.Router()
const userServ = require('../Service/userService')

router.get('/:id', userServ.getUserByIdServ)
router.post('/', userServ.addUserServ)
router.delete('/:name', userServ.delUserByNameServ)
router.put('/:name', userServ.uptUserByNameServ)

module.exports =  router