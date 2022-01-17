const router=require("express").Router();

const Todo = require("../models/todo");
router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    const newTodo=new Todo( {todo});
  
    newTodo.save()
    .then(()=>{
    res.redirect("/");
    })
    .catch(err=>console.log(err));
      
});
router.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id}).then(()=>{
        res.redirect("/");
    }
    )
    .catch(err=>console.log(err));
});
module.exports=router;