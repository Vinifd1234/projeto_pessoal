var database = require("../database/config")


function listar_postagens() {
    var instrucao = `
    SELECT * FROM Postagem 
    join Usuario on fkUsuario = idUsuario
    join Categoria on fkCategoria = idCategoria;
    `;
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
    select Usuario.nomeUsuario, Postagem.tituloPostagem, Comentario.corpoComentario from Comentario
join Usuario on fkUsuario = idUsuario 
join Postagem on fkPostagem = idPostagem
where idPostagem = ${id_post};
    `;
    console.log("Executando instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar_postagens,
    postar_comentario,
    listar_comentarios
}