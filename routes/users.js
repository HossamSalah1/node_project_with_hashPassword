const express=require('express')
const router=express.Router()
const { create,GettAll,deletById }=require('../Controller/usersController')

router.post("/",create)
router.get("/",GettAll)
router.delete("/:id",deletById)

module.exports=router