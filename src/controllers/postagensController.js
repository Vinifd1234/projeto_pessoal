var postagensModel = require("../models/postagensModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA  postagensController");
    res.json("ESTAMOS FUNCIONANDO!");
}


function fnListar_postagens(req, res){
    postagensModel.fnListar_postagens()
    .then(function(resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhuma postagem encontrada encontrado!")
        }
    })
    .catch(function(erro){
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
    })

    
}



function fnListar_comentarios(req, res){
    var id_post = req.body.id_post;

    if(id_post == undefined){
        res.status(400).send("o ID do post está undefined!!");
    }else{
        console.log("Estou aqui!!");
        
        postagensModel.fnListar_comentarios(id_post)
        .then(
            function(resultado){
                res.json(resultado);
            }

        )
        .catch(
            function(erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao trazer os comentários Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
        }
}


function fnPostar_comentario(req, res){
    var id_postador = req.body.id_postador;
    var corpo_comentario = req.body.corpo_comentario;
    var id_post = req.body.id_post;

    if(id_postador == undefined){
        res.status(400).send("o ID do postador está undefined!");
    }else if(corpo_comentario == undefined){
        res.status(400).send("O corpo do comentário está undefined!");
    }else if(id_post == undefined){
        res.status(400).send("o ID do post está undefined!");
    }else{
        postagensModel.fnPostar_comentario(id_postador, corpo_comentario, id_post)
        .then(function(resposta){
            resposta.json(resultado);
            console.log(resultado);
        })
        .catch(
            function(erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o comentário! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
        
    }

}

module.exports = {
    fnListar_postagens,
    fnListar_comentarios,
    fnPostar_comentario
}