const express = require("express");
const router = express.Router();

const { getAll, addUser, editUser, deleteByID, findByID, filterByAddress } = require ("./controller");

router.get ("/", getAll);
router.post ("/", addUser);
router.put ("/:id", editUser);
router.delete ("/:id", deleteByID);
router.get ("/findById/:id", findByID);
router.get ("/filterByAddress", filterByAddress);

module.exports = router;