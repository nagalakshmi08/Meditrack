const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/pharmaDb")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    medicine:{
        type:String,
        required:true
    },
    mfd:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    },
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection        