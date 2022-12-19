const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')
const Blog = require('./routes/blogRoutes')
const Comment = require('./routes/commentsRoutes')
const TourSite = require('./routes/tourSiteRoutes')
const app = express()
const port = 4000
app.use(cors())
app.use(express.json())

//database connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.db_url).then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})

app.use('/ZooriMedia/blog', Blog)
app.use('/ZooriMedia/comments', Comment)
app.use('/ZooriMedia/tourSites', TourSite)
app.listen(process.env.PORT||port,()=>{
    console.log(`app running on port ${port}`)
})

