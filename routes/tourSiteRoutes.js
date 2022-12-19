
const TourSite = require('../models/tourSites')
const router = require('express').Router()



router.post("/",  async (req,res)=>{
    const newTourSite = TourSite(req.body)
    try {
        const savedTourSite = await newTourSite.save()
        res.status(200).json(savedTourSite)
    } catch (error) {
        res.status(500).json(error)
    }
})


//get a single product
router.get('/:id', async(req,res)=>{
    try {
        const singleTourSite = await TourSite.findById(req.params.id)
        res.status(200).json(singleTourSite)
    } catch (error) {
        res.status(500).json(error)
    }
})
// //get all products by category
router.get('/',  async (req,res)=>{
    const qcategory = req.params.category
    
    try {   
        let tourSites;

        if(qcategory){
            tourSites = await TourSite.find({category:{
                $in: qcategory
            }}).sort({}) 
        }else{
            tourSites = await TourSite.find()
        }
            
            res.status(200).json(tourSites)
        
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get('/', async(req,res)=>{
    const query = req.params.new
    try {
        const tourSites = query? await TourSite.find().sort({_id:-1}).limit(9)  : await TourSite.find();
        res.status(200).json(tourSites)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update a product
router.put('/:id',  async (req,res)=>{
    try {
     const updatedTourSite = await TourSite.findByIdAndUpdate(req.params.id, {
         $set: req.body
     },{new: true});
     res.status(200).json(updatedTourSite)
    } catch (error) {
     res.status(500).json(error)
    }
 })
// delete a product
 router.delete('/:id', async (req,res)=>{
     try {
         const deletedTourSite = await TourSite.findByIdAndDelete(req.params.id)
         res.json(200).json("Product has been deleted")
     } catch (error) {
         res.status(500).json(error)
     }
 })
 module.exports = router