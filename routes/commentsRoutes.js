
const Comment = require('../models/comments')
const router = require('express').Router()



router.post("/",  async (req,res)=>{
    const newComment = Comment(req.body)
    try {
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (error) {
        res.status(500).json(error)
    }
})


//get a single product
router.get('/:id', async(req,res)=>{
    try {
        const singleComment = await Comment.findById(req.params.id)
        res.status(200).json(singleComment)
    } catch (error) {
        res.status(500).json(error)
    }
})
// //get all products by category
router.get('/',  async (req,res)=>{
    const qcategory = req.params.category
    
    try {   
        let comment;

        if(qcategory){
            comment = await Comment.find({category:{
                $in: qcategory
            }}).sort({}) 
        }else{
            comment = await Comment.find()
        }
            
            res.status(200).json(comment)
        
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get('/', async(req,res)=>{
    const query = req.params.new
    try {
        const comment = query? await Comment.find().sort({_id:-1}).limit(8)  : await Comment.find();
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update a product
router.put('/:id',  async (req,res)=>{
    try {
     const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
         $set: req.body
     },{new: true});
     res.status(200).json(updatedComment)
    } catch (error) {
     res.status(500).json(error)
    }
 })
// delete a product
 router.delete('/:id', async (req,res)=>{
     try {
         const deletedComment = await Comment.findByIdAndDelete(req.params.id)
         res.json(200).json("Product has been deleted")
     } catch (error) {
         res.status(500).json(error)
     }
 })
 module.exports = router