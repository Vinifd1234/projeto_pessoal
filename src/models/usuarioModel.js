var database = require('../database/config');

function fnListar() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM Usuario where nivelUsuario != 2 and nivelUsuario != 3;
        `;

  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnListar_usuarios_inativos(){
  var instrucao = `
        SELECT * FROM Usuario where nivelUsuario = 3;
        `;

  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnListar1usuario(id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar1usuario()"
  );
  var instrucao = `
        SELECT * FROM Usuario where idUsuario = ${id};
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnEntrar(email, senha) {
  var instrucao = `
        SELECT * FROM Usuario WHERE emailUsuario = '${email}' AND senhaUsuario = SHA2('${senha}', 224);
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnCadastrar(nome, sobrenome, email, senha, telefone) {
  var instrucao = `
        INSERT INTO Usuario (nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, telefoneUsuario) VALUES ('${nome}', '${sobrenome}' ,'${email}', SHA2('${senha}', 224), '${telefone}');
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnAtualizar(id, nome, sobrenome, email, telefone) {
  var instrucao = `
        UPDATE Usuario SET nomeUsuario = '${nome}', sobrenomeUsuario = '${sobrenome}', emailUsuario = '${email}', telefoneUsuario = '${telefone}' where idUsuario = ${id};
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnExcluir(id) {
  var instrucao = `
    UPDATE Usuario set nivelUsuario = 3 WHERE idUsuario = ${id};
    `;
  console.log('Executando instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnReativar_conta(id){
  var instrucao = `
    UPDATE Usuario set nivelUsuario = 1 WHERE idUsuario = ${id};
    `;
  console.log('Executando instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnVerificar_email(email) {
  var instrucao = `
    SELECT * FROM Usuario WHERE emailUsuario = '${email}';
    `;
  console.log('Executando instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnRegistrar_acesso(id) {
  var instrucao = `
    insert into Acesso (fkUsuario) values (${id});
    `;
  console.log('Executando instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function fnAtualizar_ultimo_acesso(id) {
  var instrucao = `
    update Usuario set ultimoAcessoUsuario = now() where idUsuario = ${id};
    `;
    console.log('Executando instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  fnEntrar,
  fnCadastrar,
  fnVerificar_email,
  fnAtualizar,
  fnListar,
  fnListar1usuario,
  fnAtualizar_ultimo_acesso,
  fnRegistrar_acesso,
  fnExcluir,
  fnListar_usuarios_inativos,
  fnReativar_conta
};
