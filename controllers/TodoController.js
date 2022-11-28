const express = require('express');
const Todo = require('../models/Todo');

function getAllTodos(req, res) {
    Todo.find().sort({ date: -1 })
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ success: false }));
}

function getSingleTodo(req, res) {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(404).json({ success: false }));
}

function createTodo(req, res) {
    Todo.create(req.body)
        .then(todo => res.json(todo))
        .catch(err => res.status(404).json({ success: false }));
}

function updateTodoById(req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(todo => res.json(todo))
        .catch(err => res.status(404).json({ success: false }));
}

function deleteTodoById(req, res) {
    Todo.findByIdAndDelete(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(404).json({ success: false }));
}

module.exports = {
    getAllTodos,
    getSingleTodo,
    createTodo,
    updateTodoById,
    deleteTodoById
};