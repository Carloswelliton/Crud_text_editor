const express = require('express');
const router = express.Router();

router.get('/article', (req, res) =>{
    res.send("Rota de artigos")
});

router.get("/admin/article/new", (req,res) =>{
    res.send("Rota para criar uma nova artigo")
});

module.exports = router;