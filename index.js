var express=require("express");
var adminRouters=require("./admin");
var empRouters=require("./emp");
var app=express();


app.use(express.json());
app.use("/admin",adminRouters);
app.use("/employees",empRouters);

app.listen(5000,function(){
    console.log("server started");
})

