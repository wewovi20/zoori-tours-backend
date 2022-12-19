const mongoose = require('mongoose')


const ComentSchema = mongoose.Schema({
    
    blogId: {
        type: String, 
        required: true, 
        
    },
   
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    replies:Array
   
    
},{timestamps: true});
module.exports = mongoose.model('Comments', ComentSchema);