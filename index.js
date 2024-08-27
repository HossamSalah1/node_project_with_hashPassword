
const express = require('express');
const mongoose = require('mongoose')



let todosRoutes = require('./routes/todos')
let usersRoutes = require('./routes/users.js')

const app = express();


app.use(express.json())

app.use('/todos', todosRoutes);
app.use('/users', usersRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/TaskSchoolManager').then(() => {
    console.log("connected to db server successfully");

}).catch((err) => {
    console.log(err);
})






app.listen(3000, () => {
    console.log("Your server started on PORT 3000");

}) 