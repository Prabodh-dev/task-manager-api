const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const taskSchema = new mongoose.Schema({
    description: {type: String,required: true},
    completed: {type:String, default:false},
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
});


const Task = mongoose.model('Task', taskSchema);
module.exports = Task;