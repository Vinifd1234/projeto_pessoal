    var email_existente = false;
    var numero = 0;
    function fnVerificarEmail(){
        var emailVar = input_email.value;
        fetch("/usuarios/verificar_email", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailVar
            })
        })
        .then(
            function(resultado){
                console.log("Resultado:" + resultado.json()
                .then(function(dados){
                if(dados.length == 0){
                    email_existente = false;
                    alert("Email não cadastrado")
                    numero = false;
                }else{
                    email_existente = true;
                    alert("Email ja cadastrado");
                    numero = true;
                }
                console.log(numero);
                }));
            }
        )
        .catch(
            function(erro){
                console.log("ERRO: ",erro);
            }
        )
    }
