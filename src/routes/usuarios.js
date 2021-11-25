var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/atualizar_ultimo_acesso", function(req, res){
    usuarioController.atualizar_ultimo_acesso(req, res);
})



router.get("/listar_postagens", function (req, res) {
    usuarioController.listar_postagens(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/excluir", function (req, res) {
    usuarioController.excluir(req, res);
});

router.post("/listar1usuario", function (req, res) {
    usuarioController.listar1usuario(req, res);
});

router.post("/atualizar", function (req, res) {
    usuarioController.atualizar(req, res);
});

router.post("/verificar_email", function (req, res) {
    usuarioController.verificar_email(req, res);
});


router.post("/listar_comentarios", function (req, res) {
    usuarioController.listar_comentarios(req, res);
});

router.post("/postar_comentario", function (req, res) {
    usuarioController.postar_comentario(req, res);
});

router.post("/registrar_acesso", function (req, res) {
    usuarioController.registrar_acesso(req, res);
});

module.exports = router;