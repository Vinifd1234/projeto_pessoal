var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.fnTestar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.fnListar(req, res);
});

router.get("/listar_usuarios_inativos", function(req, res){
    usuarioController.fnListar_usuarios_inativos(req, res);
});

router.post("/atualizar_ultimo_acesso", function(req, res){
    usuarioController.fnAtualizar_ultimo_acesso(req, res);
})

router.post("/reativar_conta", function(req, res){
    usuarioController.fnReativar_conta(req, res);
})

router.post("/cadastrar", function (req, res) {
    usuarioController.fnCadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.fnEntrar(req, res);
});

router.post("/excluir", function (req, res) {
    usuarioController.fnExcluir(req, res);
});

router.post("/listar1usuario", function (req, res) {
    usuarioController.fnListar1usuario(req, res);
});

router.post("/atualizar", function (req, res) {
    usuarioController.fnAtualizar(req, res);
});

router.post("/verificar_email", function (req, res) {
    usuarioController.fnVerificar_email(req, res);
});


router.post("/listar_comentarios", function (req, res) {
    usuarioController.fnListar_comentarios(req, res);
});

router.post("/postar_comentario", function (req, res) {
    usuarioController.fnPostar_comentario(req, res);
});

router.post("/registrar_acesso", function (req, res) {
    usuarioController.fnRegistrar_acesso(req, res);
});

module.exports = router;