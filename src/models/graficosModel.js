var database = require("../database/config")

function listar_usuarios_inativos_e_ativos() {
    var instrucao = `
    select count(idUsuario) as 'Inativos' from Usuario where nivelUsuario = 3
    union all
    select count(idUsuario) as 'Ativos' from Usuario where nivelUsuario = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_PostagensxComentarios() {
    var instrucao = `
    select tituloPostagem as 'postagem', count(idComentario) as 'comentario' from Comentario join Postagem on fkPostagem = idPostagem group by tituloPostagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar_usuarios_inativos_e_ativos,
    listar_PostagensxComentarios
}