// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simula o envio da mensagem (você pode adicionar a lógica real de envio aqui)
    alert('Mensagem enviada com sucesso!');
    
    // Limpa o formulário após o envio
    document.getElementById('contact-form').reset();
});
