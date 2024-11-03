//import  the modules
import * as express from "express";
import * as mongodb from "mongodb";

//create the rest object
let app:any =express();

//create the ref variable
let ashokIT:any=mongodb.MongoClient;

app.get("/products/:category",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://kumarjenaashis54:grziSusiIQVprwrl@cluster3.itadk.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority&appName=Cluster3",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db:any=connection.db("ashokit_nodejs");
            db.collection("products").find({"category":req.params.category}).toArray((err:any,array:any):any=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
})
//assign the port
let port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log("Server Started");
})