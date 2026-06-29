// Seleciona o formulário de contato
const formulario = document.getElementById("form-contato");


// Evento executado quando o usuário clicar no botão enviar
formulario.addEventListener("submit", function(event) {


    // Impede o envio padrão do formulário
    event.preventDefault();



    // Captura os valores digitados pelo usuário
    let nome = document.getElementById("nome").value;

    let email = document.getElementById("email").value;

    let mensagem = document.getElementById("mensagem").value;



    // Validação dos campos vazios
    if(nome === "" || email === "" || mensagem === "") {

        alert("Por favor, preencha todos os campos.");

        return;

    }



    // Validação simples do formato do e-mail
    if(!email.includes("@")) {

        alert("Digite um e-mail válido.");

        return;

    }



    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");



    // Limpa os campos após o envio
    formulario.reset();


});
