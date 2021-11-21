var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario where nivelUsuario != 2 and nivelUsuario != 3;
        `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function listar_postagens() {
    var instrucao = `
    SELECT * FROM postagem 
    join Usuario on fkUsuario = idUsuario
    join Categoria on fkCategoria = idCategoria;
    `;
    return database.executar(instrucao);
}

function listar1usuario(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar1usuario()");
    var instrucao = `
        SELECT * FROM Usuario where idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, sobrenome, email, senha, telefone) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, email, senha, telefone);
    var instrucao = `
        INSERT INTO Usuario (nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, telefoneUsuario) VALUES ('${nome}', '${sobrenome}' ,'${email}', '${senha}', '${telefone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar(id, nome, sobrenome, email, telefone) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():", id, nome, sobrenome, email, telefone);
    var instrucao = `
        UPDATE Usuario SET nomeUsuario = '${nome}', sobrenomeUsuario = '${sobrenome}', emailUsuario = '${email}', telefoneUsuario = '${telefone}' where idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function excluir(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n");
    var instrucao = `
    UPDATE usuario set nivelUsuario = 3 WHERE idUsuario = ${id};
    `;
    console.log("Executando instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar_email(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n");
    var instrucao = `
    SELECT * FROM Usuario WHERE emailUsuario = '${email}';
    `;
    console.log("Executando instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function postar_comentario(id_postador, corpo_comentario, id_post) {
    var instrucao = `
    insert into Comentario (corpoComentario, fkUsuario, fkPostagem) values ('${corpo_comentario}', '${id_postador}', '${id_post}');
    `;
    console.log("Executando instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_comentarios(id_post) {
    var instrucao = `
    select Usuario.nomeUsuario, Postagem.tituloPostagem, comentario.corpoComentario from comentario
join Usuario on fkUsuario = idUsuario 
join Postagem on fkPostagem = idPostagem
where idPostagem = ${id_post};
    `;
    console.log("Executando instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
    excluir,
    postar_comentario
};