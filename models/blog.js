const mongoose = require('mongoose')


const BlogSchema = mongoose.Schema({
    
    title: {
        type: String, 
        required: true, 
        
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
   img: {
        type: String,
        
    },
    otherImages:Array
   
    
},{timestamps: true});
module.exports = mongoose.model('Blog', BlogSchema);