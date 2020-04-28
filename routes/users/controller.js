const users = require ("../../models/users");

module.exports = {

    getAll : (req, res) => {
        try {
            res.status(200).json({
                data : users,
                message : "Get all data users",
            })
        } catch (error) {
            res.json(error);
        }
    },


    addUser : (req,res) => {
        try {
            const { name, address } = req.body;
            const newUser = {
                id : users.length + 1,
                name,
                address,
            };
    
            users.push(newUser);
    
            res.status(200).json({
                message : "Create new data is Successfully",
                data : users,
            });
        } 
            catch (error) {
                res.json(error);
            }
    },


    editUser : (req, res) => {
        try {
            const { id } = req.params;
            const { name, address } = req.body;
    
            const editUser = {
                id : Number(id),
                name,
                address,
            };
    
            users.splice(id - 1, 1, editUser);
    
            res.status(200).json ({
                message : "User is successfully changes",
                data : users,
            });
        }
        catch (error) {
            res.json(error);
        }
    },


    deleteByID : (req, res) => {
        try {
            const { id } = req.params

            users.splice (id - 1, 1)

            res.status(200).json ({
                message : "User is deleted",
                data : users,
            });
        } catch (error) {
            res.json(error);
        }
},


    findByID : (req, res) => {
        try {
            const { id } = req.params

            const findUserID = users.filter ((element) => {
                return element.id == id;
            });

            res.status(200).json({
                data : findUserID,
                message : "Find user by ID"
            })
        } 
        catch (error) {
            res.json(error);
        }
    },


    filterByAddress : (req, res) => {
        const { address } = req.query
    
        const filteredUser = users.filter((element) => {
            return element.address.toLowerCase() === address.toLowerCase();
        });
    
        res.status(200).json({
            message : "Get data filter by address",
            data : filteredUser,
        });
    }



}