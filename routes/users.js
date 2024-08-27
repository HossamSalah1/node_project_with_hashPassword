const express=require('express')
const router=express.Router()
const { create,GettAll,deletById,count,update }=require('../Controller/usersController')

router.post("/",create)
router.get("/",GettAll)
router.delete("/:id",deletById)
router.get("/",count)
router.put("/:id",update)


module.exports=router