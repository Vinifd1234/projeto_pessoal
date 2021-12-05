var graficosModel = require("../models/graficosModel");

function fnListar_usuarios_inativos_e_ativos(req, res){
    graficosModel.fnListar_usuarios_inativos_e_ativos()
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

function fnListar_PostagensxComentarios(req, res){
    graficosModel.fnListar_PostagensxComentarios()
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

function fnListar_Usuarios_recorrentes(req, res){
    graficosModel.fnListar_Usuarios_recorrentes()
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

function fnListar_UsuariosxComentarios(req, res){
    graficosModel.fnListar_UsuariosxComentarios()
    .then(function(resultado){
        res.status(200).json(resultado)
    })
    .catch(
        function(erro){
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
   fnListar_usuarios_inativos_e_ativos,
   fnListar_Usuarios_recorrentes,
   fnListar_PostagensxComentarios,
   fnListar_UsuariosxComentarios
}