var graficosModel = require("../models/graficosModel");

function testar(req, res) {
    console.log("ENTRAMOS NA graficosController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar_usuarios_inativos_e_ativos(req, res){
    graficosModel.listar_usuarios_inativos_e_ativos()
    .then(function(resultado){
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })
    .catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function listar_PostagensxComentarios(req, res){
    graficosModel.listar_PostagensxComentarios()
    .then(
        function(resultado){
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }
    )
    .catch(
        function(erro){
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
    

}

function listar_Usuarios_recorrentes(req, res){
    graficosModel.listar_Usuarios_recorrentes()
    .then(
        function(resultado){
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }
    )
    .catch(
        function(erro){
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
   testar,
   listar_usuarios_inativos_e_ativos,
   listar_Usuarios_recorrentes,
   listar_PostagensxComentarios
}