const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskroutes.js');

require('dotenv').config();
require('./db.js');
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/users',userRoutes);
app.use('/tasks',taskRoutes);

app.get('/',(req,res) => {
    res.json({
        message: 'Task Manager API is working'
    })
});
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}.`)
});