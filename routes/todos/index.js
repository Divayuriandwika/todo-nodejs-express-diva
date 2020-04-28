const express = require("express");
const router = express.Router();

const { getAllTodos, addTodo, editTodo, deleteByTodoID, findByTodoID, findByUserID } = require ("./controller");

router.get ("/", getAllTodos);
router.post ("/", addTodo);
router.put ("/:id", editTodo);
router.delete ("/:id", deleteByTodoID);
router.get ("/:id", findByTodoID);
router.get ("/findByUser/:userId", findByUserID);

module.exports = router;