// window.alert("");  esse método exibe uma caixa de diálogo com uma mensagem e um botão "OK" na tela do usuário.

document.addEventListener("DOMContentLoaded", function() {

}) // esse evento é acionado quando o conteúdo HTML do documento foi completamente carregado e analisado, sem aguardar o carregamento completo de estilos, imagens e subframes.

// 1.Pegar o evento de submit do formulário para evitar o comportamento padrão de recarregar a página

    const form = document.querySelector(".form-group");

    form.addEventListener("submit", function(event){
        event.preventDefault(); // esse método impede o comportamento padrão do evento, que no caso de um formulário seria recarregar a página.

        //2. Obter o valor digitado pelo usuário nos campos do formulário

        const input = document.getElementById("background-description");
        const description = input.value.trim(); // o método trim() remove os espaços em branco no início e no final da string.

        setLoading(true); // chama a função para exibir o indicador de carregamento.
        if(!description){ // se a descrição estiver vazia, não faz nada.
            return;
        }
})
    //3. Exibir um indicador de carregamento enquanto a requisição está sendo processada

    function setLoading(isloading){
        const button = document.getElementById("btn-text");
        if(isloading){
            button.innerHTML = "Gerando Background...";
        }else{
            button.innerHTML = "Gerar Background"; // innerHTML permite alterar o conteúdo HTML de um elemento.

        }

} // sempre que o formulário for enviado, essa função será executada.


// 4. Fazer uma requisição HTTP (POST) para a API do

// n8n, enviando o texto do formulário no corpo da requisição em formato JSON.

// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS do background).

// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
// - Mostrar o HTML e CSS gerado em uma área de preview.
// - Inserir o CSS retornado dinamicamente na página para aplicar o background.


// 7. Remover o indicador de carregamento após o recebimento da resposta.
