const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  next({ status:200, message : 'Hello {name}, you are {age} years old:${req.origionalUrl}'});
});

        
module.exports = app;
