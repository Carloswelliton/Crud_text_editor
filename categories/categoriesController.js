const express = require('express');
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

router.get("/admin/categories/new", (req, res)=>{
    res.render("admin/categories/new");
})

router.post("/categories/save", (req,res)=>{
    var title = req.body.title;
    if(title != undefined){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(()=>{
            res.redirect("/admin/categories");
        })
    }else{
        res.redirect("/admin/categories/new");
    }
})

router.get("/admin/categories", (req, res)=>{
    Category.findAll().then(categories =>{
        res.render("admin/categories/index", {categories: categories});
    })
})

router.post("/categories/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() =>{
                res.redirect("/admin/categories")
            })
        }else{
            res.redirect("/admin/categories");
        }
    }else{
        res.redirect("/admin/categories");
    }
});


router.get('/delete/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const idBody = req.body.id

        const deletaOBJ = await Category.deleteOne({id: id})
    }catch(err){

    }
})

router.get("/admin/categories/edit/:id", (req, res) => {
    var id = req.body.id;
    Category.findByPk(id).then(categoria =>{
        
    })
})


module.exports = router;