var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function excluir(req, res){
    var id = req.body.id_usuario;
    console.log("Entramos na controller de exclusão :D");
    usuarioModel.excluir(id).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(function(erro){
        console.log(erro);
    })
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function listar_postagens(req, res){
    usuarioModel.listar_postagens()
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

function listar1usuario(req, res){
    var id = req.body.id_usuario;
    usuarioModel.listar1usuario(id).
    then(function (resultado){
            res.status(200).json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
    })

}

function verificar_email(req, res){
    console.log("Estou na controller!")
    var email = req.body.email;

    if(email == undefined){
        res.status(400).send("Seu email está undefined!");
    }else{
        usuarioModel.verificar_email(email)
        .then(
            function (resultado){
                if(resultado.length == 1){
                    res.status(200).send(resultado);
                }else{
                    res.status(200).json(resultado);
                    console.log('Usuário não encontrado!!')
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

function entrar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;
    var senha = req.body.senha;
    var telefone = req.body.telefone;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }else {
        usuarioModel.cadastrar(nome, sobrenome, email, senha, telefone)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar(req, res){
    var id = req.body.id;
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;
    var telefone = req.body.telefone;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }else if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    }else {
        usuarioModel.atualizar(id, nome, sobrenome, email, telefone)
        .then(
            function(resultado){
                res.json(resultado);
                console.log(resultado);
            }
        )
        .catch(
            function(erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a atualização! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            })
     }
}

function listar_ultimo_acesso(req, res){
    var id = req.body.id;

    if(id == undefined){
        res.status(400).send("Seu id está undefined!");
    }else{
        usuarioModel.listar_ultimo_acesso(id)
        .then(function(resposta){
            res.send(resposta)
        })

        .catch()
    }
}

function listar_comentarios(req, res){
    var id_post = req.body.id_post;

    if(id_post == undefined){
        res.status(400).send("o ID do post está undefined!!");
    }else{
        console.log("Estou aqui!!");
        
        usuarioModel.listar_comentarios(id_post)
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


function postar_comentario(req, res){
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
        usuarioModel.postar_comentario(id_postador, corpo_comentario, id_post)
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
    entrar,
    cadastrar,
    verificar_email,
    atualizar,
    listar,
    listar_postagens,
    listar1usuario,
    listar_comentarios,
    testar,
    excluir,
    postar_comentario
}