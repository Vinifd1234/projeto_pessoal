var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/", function (req, res) {
    graficosController.testar(req, res);
});

router.get("/listar_usuarios_inativos_e_ativos", function(req, res){
    graficosController.listar_usuarios_inativos_e_ativos(req, res);
});

router.get("/listar_PostagensxComentarios", function(req, res){
    graficosController.listar_PostagensxComentarios(req, res);
});



module.exports = router;