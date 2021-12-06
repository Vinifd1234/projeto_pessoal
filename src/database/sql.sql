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
-- A senha possuirá um tamanho maior por causa de sua criptografia
senhaUsuario varchar(150) not null,
constraint chk_email check (emailUsuario like '%@%' and emailUsuario like '%.%'),
telefoneUsuario varchar(45),
nivelUsuario int default 1,
ultimoAcessoUsuario datetime default now()
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

-- Insert na tabela Usuario (adicionando a conta de admin)
Insert into Usuario (nomeUsuario, emailUsuario, senhaUsuario, nivelUsuario) values
('Administrador', 'admin@email.com', SHA2('admin', 224), 2);

-- Insert de usuários diversos 
Insert into Usuario (nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario) values 
('abel', 'julio', 'abel@email.com', SHA2('Abelzitos', 224)), 
('amanda', 'grazielle', 'amanda@email.com', SHA2('Amandinha', 224)), 
('aline', 'matos', 'aline@email.com', SHA2('Alinezinha', 224)), 
('augusto', 'césar', 'augusto@email.com', SHA2('Augustinho', 224)), 
('bruno', 'ferreira', 'bruno@email.com', SHA2('Bruninho', 224)), 
('brenda', 'carvalho', 'brenca@email.com', SHA2('Brendinha', 224)), 
('carlos', 'issamu', 'carlos@email.com', SHA2('Carlinhos', 224)), 
('matheus', 'vaz', 'matheus@email.com', SHA2('Vazinho', 224)), 
('guilherme', 'bighouse', 'guilherme@email.com', SHA2('Guibby', 224)), 
('victor', 'souza', 'victor@email.com', SHA2('Victu', 224));


--  Inserts de postagens
-- Categoria: físico
insert into Postagem (tituloPostagem, subTituloPostagem, fkUsuario, fkCategoria, diretorioImagem) values 
('Os benefícios da atividade física', 'Saiba como se exercitar pode contribuir para uma vida melhor.', 1, 1, 4),
('Calistenia: Dominando sua força corporal', 'Entenda o que é e os benefícios da calistenia.', 1, 1, 1),
('Qual a importância de uma alimentação saudável?', 'Além da definição corporal, há outros benefícios em se alimentar bem?.', 1, 1, 2),
('Faça corrida! Mas não corra dos desafios.', 'Uma breve resenha acerca do significado da atividade física com resiliência e disciplina.', 1, 1, 9),
('Mais esperto que o diabo: Resenha', 'O que uma obra de 1938 pode nos ensinar sobre um suposto Diabo que pode ser responsável por sua insatisfação?', 1, 2, 1),
('Caia sete vezes, levante oito', 'Um breve texto sobre resiliência, disciplina e persistência', 1, 2, 2),
('Perspectiva: A != B', 'Como o modo de enxergar a vida e os fatos afetam diretamente seu pensamento.', 1, 2, 3),
('Cérebro: a CPU mais eficiente já inventada.', 'Mesmo sendo lançada há milhares de anos atrás, a CPU nativa dos seres humanos continua à demonstrar eficiência sobrehumana conforme o tempo passa.', 1, 2, 4),
('Consistência nos estudos.', 'Como estudar 1 hora por dia te levará à grandiosos resultados?', 1, 3, 1),
('A importância das áreas de exatas e humanas', 'Aprenda a diferença e a importância de cada uma.', 1, 3, 3),
 ('Leitura: O exercício do cérebro', 'Saiba o porquê a leitura mostra-se tão importante no processo de desenvolvimento humano.', 1, 3, 4),
('Meditação: A arte de silenciar à si mesmo.', 'Por que é tão díficil ficar em paz com nossos próprios pensamentos?', 1, 4, 1),
 ('Estoicismo: A arte de não sofrer', 'O que o ex-imperador romano Marco Aurélio nos ensina sobre sofrimento e plenitude?', 1, 4, 2);


