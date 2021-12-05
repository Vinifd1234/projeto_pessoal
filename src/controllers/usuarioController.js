var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function fnTestar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO, VAGA!");
}

function fnExcluir(req, res){
    var id = req.body.id_usuario;
    console.log("Entramos na controller de exclusão :D");
    usuarioModel.fnExcluir(id).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(function(erro){
        console.log(erro);
    })
}

function fnReativar_conta(req, res){
    var id = req.body.id_usuario;

    usuarioModel.fnReativar_conta(id).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(function(erro){
        console.log(erro);
    })

}

function fnListar(req, res) {
    usuarioModel.fnListar()
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

function fnListar_usuarios_inativos(req, res){
    usuarioModel.fnListar_usuarios_inativos()
    .then(
        function(resultado){
            console.log(resultado);
            res.status(200).json(resultado);
        }
    )
    .catch(
        function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}


function fnListar1usuario(req, res){
    var id = req.body.id_usuario;
    usuarioModel.fnListar1usuario(id).
    then(function (resultado){
            res.status(200).json(resultado);
    })
    .catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
    })

}

function fnVerificar_email(req, res){
    console.log("Estou na controller!")
    var email = req.body.email;

    if(email == undefined){
        res.status(400).send("Seu email está undefined!");
    }else{
        usuarioModel.fnVerificar_email(email)
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

function fnEntrar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.fnEntrar(email, senha)
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

function fnCadastrar(req, res) {
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
        usuarioModel.fnCadastrar(nome, sobrenome, email, senha, telefone)
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

function fnAtualizar(req, res){
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
        usuarioModel.fnAtualizar(id, nome, sobrenome, email, telefone)
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

function fnRegistrar_acesso(req, res){
    var id = req.body.id;

    if(id == undefined){
        res.status(400).send("Seu ID está undefined");
    }else{
        usuarioModel.fnRegistrar_acesso(id)
        .then(
            function(resultado){
                res.json(resultado);
            }
        )
        .catch(function(erro){
            console.log(
                "\nHouve um erro ao realizar a atualização! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
    }
}

function fnAtualizar_ultimo_acesso(req, res){
    var id = req.body.id;

    if(id == undefined){
        res.status(400).send("Seu ID está undefined");
    }else{
        usuarioModel.fnAtualizar_ultimo_acesso(id)
        .then(
            function(resultado){
                resultado.json();
            }
        )
        .catch(function(erro){
            console.log(
                "\nHouve um erro ao realizar a atualização! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
        )
    }
}

module.exports = {
    fnEntrar,
    fnCadastrar,
    fnVerificar_email,
    fnAtualizar,
    fnListar,
    fnListar1usuario,
    fnTestar,
    fnRegistrar_acesso,
    fnAtualizar_ultimo_acesso,
    fnExcluir,
    fnListar_usuarios_inativos,
    fnReativar_conta
}