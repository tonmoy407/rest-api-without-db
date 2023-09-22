let users = require("../models/usersModel");
const { v4: uuidv4 } = require("uuid");

//get All users
const getAllusers= (req, res) => {
    res.status(200).json({users});
}
//create a user
const createUsers = (req, res) => {
    const id = uuidv4();
    const username = req.body.username;
    const email = req.body.email;
    const newUser = {
        id: id,
        username: username,
        email: email
    };
    users.push(newUser);
    res.status(201).json({users})
}


//update Users
const updateUser = (req, res) => {
    const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });
  res.status(200).json(users);
}

const deleteUser = (req,res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);
  res.status(200).json({users});
}

module.exports = {getAllusers, createUsers, updateUser, deleteUser};