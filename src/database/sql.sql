-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

create database projeto_pessoal;
use projeto_pessoal;

-- Criação da tabela usuário
create table Usuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar(45) not null,
sobrenomeUsuario varchar(45),
emailUsuario varchar(45) not null,
senhaUsuario varchar(45) not null,
constraint chk_email check (emailUsuario like '%@%' and emailUsuario like '%.%'),
telefoneUsuario varchar(45),
nivelUsuario int default 1
);

-- Criação da tabela Categoria
create table Categoria(
idCategoria int primary key auto_increment,
nomeCategoria varchar(45)
);

-- Criação da tabela postagem
create table Postagem(
idPostagem int primary key auto_increment,
tituloPostagem varchar(45) not null,
subTituloPostagem varchar(45) not null,
corpoPostagem text not null,
fkUsuario int,
constraint fk_usuario_postagem foreign key (fkUsuario) references Usuario (idUsuario),
fkCategoria int,
constraint fk_categoria_postagem foreign key (fkCategoria) references Categoria (idCategoria),
diretorioImagem int,
dtCriacaoPostagem datetime default now()
);

-- Criação da tabela comentario
create table Comentario(
idComentario int auto_increment,
corpoComentario text not null,
fkUsuario int,
constraint fk_usuario_comentario foreign key (fkUsuario) references Usuario (idUsuario),
fkPostagem int,
constraint fk_postagem_comentario foreign key (fkPostagem) references Postagem (idPostagem),
primary key (idComentario, fkUsuario, fkPostagem)
);


-- Insert na tabela categoria
-- IMPORTANTE: Não mude o nome dos inserts. Eles são importantes no sistema de imagens das postagens.
insert into Categoria (nomeCategoria) values 
('Fisico'), ('Mental'), ('Intelectual'), ('Espiritual');

-- Insert na tabela Usuario (adicionando a conta de admin:)
Insert into Usuario (nomeUsuario, emailUsuario, senhaUsuario, nivelUsuario) values
('Ademiro', 'admin@email.com', 'admin', 2);


