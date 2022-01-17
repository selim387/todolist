

const router=require("express").Router();

const Todo = require("../models/todo");
//routes will be here
router.get("/",async(req,res)=> {
    const alltodo=await Todo.find();
    res.render("index",{todo:alltodo});
})
//todo router



module.exports=router;
