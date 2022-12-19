const mongoose = require('mongoose')


const TourSchema = mongoose.Schema({
    
    name: {
        type: String, 
        required: true, 
        
    },
    location:{
        type: String,
        required: true
    },
    history:{
        type: String,
        required: true
    },
   img: {
        type: String,
        
    },
    otherImages:Array
   
    
},{timestamps: true});
module.exports = mongoose.model('Tour', TourSchema);