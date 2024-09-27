'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');
const categoriesController = require("./categories/categoriesController");
const articleController = require("./articles/ArticleController");
const Article = require("./articles/Article");
const Category = require("./categories/Category");

//view engine
app.set('view engine', 'ejs');
//static
app.use(express.static('public'));
//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log("Succefull connected with DB");
    }).catch((error) =>{
        console.log(error);
    })

//Route 
app.use("/", categoriesController);
app.use("/", articleController);

app.get("/", (req, res) => {
    res.render("index");
})


app.listen(8080, ()=>{console.log("Server running at port 8080")});