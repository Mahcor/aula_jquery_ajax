
/*function consultaCep(){
//Pegando o ID do INPUT TEXT
var cep = document.getElementById("cep").value; //Aqui é criada a variável que vai pegar o VALUE(valor) da entrada do INPUT, que tem o ID="CEP"
console.log(cep); //Mostrando o resultado do ID: cep

    $.ajax({ //O "$.ajax" É uma função do JQuery
        url: "https://viacep.com.br/ws/23075085/json" ,
        type: "GET", //Requisição GET para pegar os dados
        success: function(response){ //Caso aja sucesso, mostra na console
            console.log(response); //Mostra o resultado na console do navegador
            alert(response.logradouro);  //Mostra o resultado no Pop-up
        }
    })
}
*
Se em "console.log(response);" digitar 'response.bairro' ele vai trazer somente o bairro
*
*/


/* REQUISIÇÃO AJAX */
function consultaCep(){
    $(".barra-progresso").show(); // Exibindo a barra de progresso
    //Pegando o ID do INPUT TEXT
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"; // Aqui removo o CEP fixo e concateno com a variável CEP.

    console.log(url); //Aqui mostro a URL completa, para exibir os dados do CEP digitado.

        $.ajax({ 
            url: url, //Aqui recebe a variável URL completa após a concatenação
            type: "GET",
            success: function(response){
                console.log(response);
                $( "#logradouro").html(response.logradouro); // FORMA 2 DE OBTER OS DADOS
                $( "#uf").html(response.uf);
                $( "#localidade").html(response.localidade);
                $( "#bairro").html(response.bairro);
                $( "#titulo_cep").html("CEP: " + response.cep);
                $(".cep").show(); // Aqui reexibimos a Classe que estava oculta
                $(".barra-progresso").hide();// Ocultando a barra novamente

                // FORMA 1 DE OBTER OS DADOS
                //document.getElementById("logradouro").innerHTML = response.logradouro;
                //document.getElementById("bairro").innerHTML = response.bairro;
                //document.getElementById("localidade").innerHTML = response.localidade;
                //document.getElementById("uf").innerHTML = response.uf;
            }
        })
    }
    
    //COmando JQUERY para ocultar ou mostrar algúm conteúdo
    $(function(){
        $(".barra-progresso").hide(); //Ocultando a barra de progresso antes dela ser exibida ao carregar a página
        $(".cep").hide(); // Escondeu a div toda
    })
    