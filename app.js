const express=require("express");
const mongoose=require("mongoose");
const app=express();

app.use(express.urlencoded( {extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));
app.listen(3000);