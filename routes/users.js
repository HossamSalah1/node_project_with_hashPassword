const express = require('express')
const router = express.Router()
const { create, GettAll, deletById, count, update, login } = require('../Controller/usersController')
const  {auth,restructedTo} = require("../middleware/auth")

router.post("/", create) 
router.get("/",auth,restructedTo("Admin"),GettAll)
router.delete("/:id", deletById)
router.get("/", count)
router.put("/:id", update)
router.post("/login", login)


module.exports = router 