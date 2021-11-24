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
tituloPostagem varchar(150) not null,
subTituloPostagem varchar(150) not null,
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

-- Criação da tabela acesso
create table Acesso(
idAcesso int auto_increment,
dataAcesso datetime default now(),
fkUsuario int,
primary key (idAcesso, fkUsuario),
foreign key (fkUsuario) references Usuario (idUsuario)
);


-- Insert na tabela categoria
-- IMPORTANTE: Não mude o nome dos inserts. Eles são importantes no sistema de imagens das postagens.
insert into Categoria (nomeCategoria) values 
('Fisico'), ('Mental'), ('Intelectual'), ('Espiritual'), ('Geral');

-- Insert na tabela Usuario (adicionando a conta de admin:)
Insert into Usuario (nomeUsuario, emailUsuario, senhaUsuario, nivelUsuario) values
('Ademiro', 'admin@email.com', 'admin', 2);

--  Inserts de postagens
-- Categoria: físico
insert into postagem (tituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Os benefícios da atividade física', 'Saiba como se exercitar pode contribuir para uma vida melhor.', 1, 1, 4);

insert into postagem (tituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Calistenia: Dominando sua força corporal', 'Entenda o que é e os benefícios da calistenia.', 1, 1, 1);

insert into postagem (tituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Qual a importância de uma alimentação saudável?', 'Além da definição corporal, há outros benefícios em se alimentar bem?.', 1, 1, 2);

insert into postagem (tituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Faça corrida! Mas não corra dos desafios.', 'Uma breve resenha acerca do significado da atividade física com resiliência e disciplina.', 1, 1, 9);

-- Categoria: Mental
insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Mais esperto que o diabo: Resenha', 'O que uma obra de 1938 pode nos ensinar sobre um suposto Diabo que pode ser responsável por sua insatisfação?', 1, 2, 1);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Caia sete vezes, levante oito', 'Um breve texto sobre resiliência, disciplina e persistência', 1, 2, 2);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Perspectiva: A != B', 'Como o modo de enxergar a vida e os fatos afetam diretamente seu pensamento.', 1, 2, 3);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Cérebro: a CPU mais eficiente já inventada.', 'Mesmo sendo lançada há milhares de anos atrás, a CPU nativa dos seres humanos continua à demonstrar eficiência sobrehumana conforme o tempo passa..', 1, 2, 4);

-- Categoria: Intelectual
insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Consistência nos estudos.', 'Como estudar 1 hora por dia te levará à grandiosos resultados?', 1, 3, 1);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('A importância das áreas de exatas e humanas', 'Aprenda a diferença e a importância de cada uma.', 1, 3, 3);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Aprendendo a aprender: derrubando mitos', 'Para aqueles que acham impossível serem extraordinários mesmo não nascendo extraordinário', 1, 3, 2);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Leitura: O exercício do cérebro', 'Saiba o porquê a leitura mostra-se tão importante no processo de desenvolvimento humano.', 1, 3, 4);

-- Categoria: Espiritual
insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Meditação: A arte de silenciar à si mesmo.', 'Por que é tão díficil ficar em paz com nossos próprios pensamentos?', 1, 4, 1);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('Estoicismo: A arte de não sofrer', 'O que o ex-imperador romano Marco Aurélio nos ensina sobre sofrimento e plenitude?', 1, 4, 2);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('O livro dos jovens: Resenha', 'O que uma nova religião japonesa pode ensinar aos jovens acerca da vida?', 1, 4, 3);

insert into Postagem (TituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values ('A definição de propósito de Hill', 'Por que Hill definia a definição de propósito como ponto-chave para o sucesso?', 1, 4, 4);

