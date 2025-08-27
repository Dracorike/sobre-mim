const form = document.getElementById("message-form");

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