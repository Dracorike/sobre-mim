const form = document.getElementById("message-form");

// Adição da lógica do submit. É apenas um mock, por esse motivo fiz um log para validação dos dados enviados.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(
        `
            Nome: ${document.getElementById("full-name").value}
            Email: ${document.getElementById("email-address").value}
            Mensagem: ${document.getElementById("message-text").value}
        `
    );
    alert('Mensagem enviada com sucesso!');
});