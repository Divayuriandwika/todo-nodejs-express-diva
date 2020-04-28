const todos = require ("../../models/todos");

module.exports = {

    getAllTodos : (req, res) => {
        try {
            res.status(200).json({
                data : todos,
                message : "Get all todos",
            })
        } catch (error) {
            res.json(error);
        }
    },


    addTodo : (req,res) => {
        try {
            const { userId, todo } = req.body;
            const newTodo = {
                id : todos.length + 1,
                userId,
                todo,
            };
    
            todos.push(newTodo);
    
            res.status(200).json({
                message : "Create new todo is Successfully",
                data : todos,
            });
        } 
            catch (error) {
                res.json(error);
            }
    },


    editTodo : (req, res) => {
        try {
            const { id } = req.params;
            const { userId, todo } = req.body;
    
            const editTodo = {
                id : Number(id),
                userId,
                todo,
            };
    
            todos.splice(id - 1, 1, editTodo);
    
            res.status(200).json ({
                message : "Todo is successfully changes",
                data : todos,
            });
        }
        catch (error) {
            res.json(error);
        }
    },


    deleteByTodoID : (req, res) => {
        try {
            const { id } = req.params

            todos.splice (id - 1, 1)

            res.status(200).json ({
                message : "Todo is deleted",
                data : todos,
            });
        } catch (error) {
            res.json(error);
        }
},


    findByTodoID : (req, res) => {
        try {
            const { id } = req.params

            const findTodoID = todos.filter ((element) => {
                return element.id == id;
            });

            res.status(200).json({
                data : findTodoID,
                message : "Find todo by ID"
            })
        } 
        catch (error) {
            res.json(error);
        }
    },


    findByUserID : (req, res) => {
        try {
            const { userId } = req.params

            const findUserID = todos.filter ((element) => {
                return element.userId == userId;
            });

            res.status(200).json({
                data : findUserID,
                message : "Find todo by user ID"
            })
        } 
        catch (error) {
            res.json(error);
        }
    },



}