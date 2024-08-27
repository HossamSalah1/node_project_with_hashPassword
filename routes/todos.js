const express = require('express');
const router = express.Router();

const{ update, create, deletById, getById, getAllTodos, count}=require('../Controller/todosController');



router.patch('/:id',update);

router.post('/',create);

router.get('/',getAllTodos);

router.get('/count',count);

 
router.get('/:id',getById);  

router.delete('/:id',deletById);

module.exports = router;