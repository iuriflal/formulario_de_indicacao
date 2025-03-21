function enviarWhatsapp() {
    let nomeIndicado = document.getElementById("nome_indicado").value;
    let telefoneIndicado = document.getElementById("telefone_indicado").value;
    let emailIndicado = document.getElementById("email_indicado").value;
    let seuNome = document.getElementById("seu_nome").value;

    if (!nomeIndicado || !telefoneIndicado || !seuNome) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    let mensagem = `Olá! Gostaria de indicar um cliente.
    \n📌 Nome: ${nomeIndicado}
    \n📞 Telefone: ${telefoneIndicado}
    ${emailIndicado ? `\n📧 Email: ${emailIndicado}` : ''}
    \n🔹 Indicado por: ${seuNome}`;
    
    let url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}