"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import  the modules
var express = require("express");
var mongodb = require("mongodb");
//create the rest object
var app = express();
//create the ref variable
var ashokIT = mongodb.MongoClient;
app.get("/products/:category", function (req, res) {
    ashokIT.connect("mongodb+srv://kumarjenaashis54:grziSusiIQVprwrl@cluster3.itadk.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority&appName=Cluster3", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ashokit_nodejs");
            db.collection("products").find({ "category": req.params.category }).toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
//assign the port
var port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log("Server Started");
});
