const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo",  { useNewUrlParser: true });
const todoSchema=new mongoose.Schema(
   
    {
        todo:{
        type:String,
         required: true ,
        
    },

    });
module.exports= new mongoose.model("Todo",todoSchema);