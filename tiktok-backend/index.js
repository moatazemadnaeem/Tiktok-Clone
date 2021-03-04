const express=require('express')
const mongoose=require('mongoose')
const data=require('./data')
const struct=require('./model')
//app config
const app=express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
//middleware
app.use(express.json())
app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});  
//db config

const connection_url="mongodb+srv://Moataz:Moataz0101@cluster0.ke2gb.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
//setting endpoints

app.get('/v1/posts',(req,res)=>{
    res.status(200).send(data);
})
app.post('/v2/posts',(req,res)=>{
    const bodyD=req.body;
    struct.create(bodyD,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
    
})
app.get('/v2/posts',(req,res)=>{
   
    struct.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
    
})

app.listen(port);


//listning