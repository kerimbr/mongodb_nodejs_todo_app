const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();


// Import Controllers
const {
    getAllTodos,
    getSingleTodo,
    createTodo,
    updateTodoById,
    deleteTodoById
} = require('../controllers/TodoController');


// Get All Todos
router.get('/', getAllTodos);

// Get Single Todo
router.get('/:id', getSingleTodo);

// Create Todo
router.post('/create', createTodo);

// Update Todo
router.put('/update/:id', updateTodoById);

// Delete Todo
router.delete('/delete/:id', deleteTodoById);


module.exports = router;
