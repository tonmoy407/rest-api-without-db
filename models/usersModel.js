const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Tonmoy Chandra Das",
        email: "Tonmoy@gmai.com", 
    },
    {
        id: uuidv4(),
        username: "Rakibul Rakib",
        email: "Raki9bul23@gmai.com", 
    }
];

module.exports = users;