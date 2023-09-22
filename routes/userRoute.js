
const { getAllusers, createUsers, updateUser, deleteUser } = require("../controllers/userController");
const router = require("express").Router();

router.get("/", getAllusers);

router.post("/", createUsers);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;