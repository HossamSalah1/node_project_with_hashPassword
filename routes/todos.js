const express = require('express');
const router = express.Router();

const { update, create, deletById, getById, getAllTodos, count } = require('../Controller/todosController');
const { auth } = require('../middleware/auth');



router.patch('/:id', update);

router.post('/',auth, create);

router.get('/',auth, getAllTodos);

router.get('/count', count);


router.get('/:id', getById);

router.delete('/:id', deletById);

module.exports = router;