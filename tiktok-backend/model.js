const mongoose=require('mongoose')

const plane=mongoose.Schema({
    url:String
})

module.exports=mongoose.model('struct',plane);//we made a collection and the database that called tiktok