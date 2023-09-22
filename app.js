const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//home route
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
});


app.use("/users", userRouter);
//route not found
app.use((req, res, next) => {
    res.status(404).json({message: "404 bad request"})
});

//server error

app.use((err,req, res, next) => {
    res.status(500).json({message: "error server broke"});
});
module.exports = app;