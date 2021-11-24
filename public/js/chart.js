

var inativos;
var ativos;

// Requisição para buscar a informação de ativos e inativos
fetch("/graficos/listar_usuarios_inativos_e_ativos/", {
    method: "GET",
    mode: "cors"
}).then(function (resposta) {
    if(resposta.ok){
        resposta.json().then(function (resultado) {
            config.data.datasets[0].data[0] = resultado[1].Inativos;
            config.data.datasets[0].data[1] = resultado[0].Inativos;
            var myChartPie = new Chart(document.getElementById("chartUsuariosInativosxAtivos"), config);
        })
            .catch(function(){
                alert("O gráfico não pode ser renderizado. Não há nenhum usuário cadastrado no sistema")
            })
    }
    
})
    .catch(function(erro){
        console.log(erro);
    })


//Requisição para buscar os posts e suas quantidade de comentários
fetch("/graficos/listar_PostagensxComentarios", {
    method: "GET",
    mode: "cors"
})
.then(
    function(resposta){
        resposta.json().then(
            function(dados){
               for(var i = 0; i < dados.length; i++){
                config_2.data.labels[i] = dados[i].postagem;
                config_2.data.datasets[0].data[i] = dados[i].comentario;

               }
               var myChartBar = new Chart(document.getElementById("chartPostagensxComentarios"), config_2);

            }
        )
        .catch(function(erro){
            alert("O gráfico não pode ser renderizado. Não há nenhuma postagem ou comentário cadastrado")
        });
    }
)
.catch(function(erro){
    console.log(erro);
})    

// Requisição para pegar os top 3 usuários que mais acessam
fetch("/graficos/listar_Usuarios_recorrentes", {
    method: "GET",
    mode: "cors"
})
.then(
    function(resposta){
        resposta.json().then(
            function(dados){
               for(var i = 0; i < dados.length; i++){
                config_3.data.labels[i] = dados[i].nomeUsuario;
                config_3.data.datasets[0].data[i] = dados[i].Acessos;

               }
               var myChartBar_Usuarios = new Chart(document.getElementById("chartUsuariosRecorrentes"), config_3);

            }
        )
        .catch(function(erro){
            alert("O gráfico não pode ser renderizado. Não há nenhum usuário cadastrado no sistema")
        });
    }
)
.catch(function(erro){
    console.log(erro);
})    

//Requisição para pegar os top 3 usuários que mais comentam postagens
fetch("/graficos/listar_UsuariosxComentarios",{
    method: "GET",
    mode: "cors"
})
.then(
    function(resposta){
        resposta.json().then(
            function(dados){
                console.log(dados);
               for(var i = 0; i < dados.length; i++){
                config_4.data.labels[i] = dados[i].nomeUsuario;
                config_4.data.datasets[0].data[i] = dados[i].qtdComentario;

               }
               var myChartBar_UsuariosxPostagens = new Chart(document.getElementById("chartUsuariosxComentarios"), config_4);

            }
        )
        .catch(function(erro){
            alert("O gráfico não pode ser renderizado. Não há nenhum usuário cadastrado no sistema")
        });
    }
)
.catch(function(erro){
    console.log(erro);
})


// Primeiro gráfico (Usuários ativos x Usuários inativos)
// A constante "config" serve para configurar o gráfico que será renderizado posteriormente 
var config = {
    // A primeira propriedade dessa constante de configuração é o tipo do gráfico. No caso, será do tipo torta (ou pizza)
    type: "pie",
    // A segunda propriedade é um objeto também, sendo assim, é possível manipular e configurar a seção de dados do gráfico
    data: {
        // A primeira propriedade do objeto "data" é uma lista (vetor), que será composto com os "rótulos" do gráfico, cujo, posteriormente, terão valores associados;
        labels: ["Usuários ativos", "Usuários inativos"],
        datasets: [
            // O primeiro item da lista de definição de dados é um objeto
            {
                // A primeira propriedade define a "descrição" do gráfico, que irá aparecer logo acima dele
                label: "Usuários ativos x Inativos",
                /* A segunda propriedade define os dados do gráfico, de forma que: 
                O primeiro item desse vetor "data" corresponde ao dado relacionado à primeira label (linha 111) e assim por diante*/
                data: [

                ],
                // A terceira define a cor do fundo (depende do tipo de gráfico).
                backgroundColor: [
                    "#9B59B6",
                    "#2E86C1"
                ]
            }
        ]
    },
    /* A terceira propriedade da constante "config_2" é um objeto, onde poderão ser definidas algumas configurações extras
    do gráfico, como por exemplo, o "maintainAspectRatio", que caso for atribuído true, respeitará a altura e largura que lhe foi dado,
    caso seja false, herdará essas propriedades de estilo do objeto pai */
    options: {
        maintainAspectRatio: false
    }
}

// Segundo gráfico: Postagens com mais comentários
var config_2 = {
    // A primeira propriedade dessa constante de configuração é o tipo do gráfico. No caso, será do tipo torta (ou pizza)
    type: "bar",
    // A segunda propriedade é um objeto também, sendo assim, é possível manipular e configurar a seção de dados do gráfico
    data: {
        // A primeira propriedade do objeto "data" é uma lista (vetor), que será composto com os "rótulos" do gráfico, cujo, posteriormente, terão valores associados;
        labels: [],
        datasets: [
            // O primeiro item da lista de definição de dados é um objeto
            {
                // A primeira propriedade define a "descrição" do gráfico, que irá aparecer logo acima dele
                label: "Postagens e seus números de comentários",
                /* A segunda propriedade define os dados do gráfico, de forma que: 
                O primeiro item desse vetor "data" corresponde ao dado relacionado à primeira label (linha 111) e assim por diante*/
                data: [

                ],
                // A terceira define a cor do fundo (depende do tipo de gráfico).
                backgroundColor: [
                    "#9B59B6",
                    "#2E86C1"
                ]
            }
        ]
    },
    /* A terceira propriedade da constante "config_2" é um objeto, onde poderão ser definidas algumas configurações extras
    do gráfico, como por exemplo, o "maintainAspectRatio", que caso for atribuído true, respeitará a altura e largura que lhe foi dado,
    caso seja false, herdará essas propriedades de estilo do objeto pai */
    options: {
        maintainAspectRatio: false
    }
}

// Segundo gráfico: Postagens com mais comentários
var config_3 = {
    // A primeira propriedade dessa constante de configuração é o tipo do gráfico. No caso, será do tipo torta (ou pizza)
    type: "bar",
    // A segunda propriedade é um objeto também, sendo assim, é possível manipular e configurar a seção de dados do gráfico
    data: {
        // A primeira propriedade do objeto "data" é uma lista (vetor), que será composto com os "rótulos" do gráfico, cujo, posteriormente, terão valores associados;
        labels: [],
        datasets: [
            // O primeiro item da lista de definição de dados é um objeto
            {
                // A primeira propriedade define a "descrição" do gráfico, que irá aparecer logo acima dele
                label: "Usuários com mais acessos",
                /* A segunda propriedade define os dados do gráfico, de forma que: 
                O primeiro item desse vetor "data" corresponde ao dado relacionado à primeira label (linha 111) e assim por diante*/
                data: [

                ],
                // A terceira define a cor do fundo (depende do tipo de gráfico).
                backgroundColor: [
                    "#9B59B6",
                    "#2E86C1"
                ]
            }
        ]
    },
    /* A terceira propriedade da constante "config_2" é um objeto, onde poderão ser definidas algumas configurações extras
    do gráfico, como por exemplo, o "maintainAspectRatio", que caso for atribuído true, respeitará a altura e largura que lhe foi dado,
    caso seja false, herdará essas propriedades de estilo do objeto pai */
    options: {
        maintainAspectRatio: false
    }
}

// Segundo gráfico: Postagens com mais comentários
var config_4 = {
    // A primeira propriedade dessa constante de configuração é o tipo do gráfico. No caso, será do tipo torta (ou pizza)
    type: "bar",
    // A segunda propriedade é um objeto também, sendo assim, é possível manipular e configurar a seção de dados do gráfico
    data: {
        // A primeira propriedade do objeto "data" é uma lista (vetor), que será composto com os "rótulos" do gráfico, cujo, posteriormente, terão valores associados;
        labels: [],
        datasets: [
            // O primeiro item da lista de definição de dados é um objeto
            {
                // A primeira propriedade define a "descrição" do gráfico, que irá aparecer logo acima dele
                label: "Usuários com mais comentários",
                /* A segunda propriedade define os dados do gráfico, de forma que: 
                O primeiro item desse vetor "data" corresponde ao dado relacionado à primeira label (linha 111) e assim por diante*/
                data: [

                ],
                // A terceira define a cor do fundo (depende do tipo de gráfico).
                backgroundColor: [
                    "#9B59B6",
                    "#2E86C1"
                ]
            }
        ]
    },
    /* A terceira propriedade da constante "config_2" é um objeto, onde poderão ser definidas algumas configurações extras
    do gráfico, como por exemplo, o "maintainAspectRatio", que caso for atribuído true, respeitará a altura e largura que lhe foi dado,
    caso seja false, herdará essas propriedades de estilo do objeto pai */
    options: {
        maintainAspectRatio: false
    }
}


