var express = require("express");
var router = express.Router();

var postagensController = require("../controllers/postagensController");


router.get("/listar_postagens", function(req, res){
    postagensController.fnListar_postagens(req, res);
});

router.post("/listar_comentarios", function(req, res){
    postagensController.fnListar_comentarios(req, res);
});

router.post("/postar_comentario", function(req, res){
    postagensController.fnPostar_comentario(req, res);
})

module.exports = router;