
const Blog = require('../models/blog')
const router = require('express').Router()



router.post("/",  async (req,res)=>{
    const newBlog = Blog(req.body)
    try {
        const savedBlog = await newBlog.save()
        res.status(200).json(savedBlog)
    } catch (error) {
        res.status(500).json(error)
    }
})


//get a single product
router.get('/:id', async(req,res)=>{
    try {
        const singleBlog = await Blog.findById(req.params.id)
        res.status(200).json(singleBlog)
    } catch (error) {
        res.status(500).json(error)
    }
})
// //get all products by category
router.get('/',  async (req,res)=>{
    const qcategory = req.params.category
    
    try {   
        let blog;

        if(qcategory){
            blog = await Blog.find({category:{
                $in: qcategory
            }}).sort({}) 
        }else{
            blog = await Blog.find()
        }
            
            res.status(200).json(blog)
        
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get('/', async(req,res)=>{
    const query = req.params.new
    try {
        const blog = query? await Blog.find().sort({_id:-1}).limit(8)  : await Blog.find();
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update a product
router.put('/:id',  async (req,res)=>{
    try {
     const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
         $set: req.body
     },{new: true});
     res.status(200).json(updatedBlog)
    } catch (error) {
     res.status(500).json(error)
    }
 })
// delete a product
 router.delete('/:id', async (req,res)=>{
     try {
         const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
         res.json(200).json("Product has been deleted")
     } catch (error) {
         res.status(500).json(error)
     }
 })
 module.exports = router