var database = require("../database/config")


function fnListar_postagens() {
    var instrucao = `
    SELECT * FROM Postagem 
    join Usuario on fkUsuario = idUsuario
    join Categoria on fkCategoria = idCategoria;
    `;
    return database.executar(instrucao);
}

function fnPostar_comentario(id_postador, corpo_comentario, id_post) {
    var instrucao = `
    insert into Comentario (corpoComentario, fkUsuario, fkPostagem) values ('${corpo_comentario}', '${id_postador}', '${id_post}');
    `;
    console.log("Executando instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function fnListar_comentarios(id_post) {
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
    fnListar_postagens,
    fnPostar_comentario,
    fnListar_comentarios
}