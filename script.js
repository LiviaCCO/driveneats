let prat;
function selecionarPrato(botao){
    const pratoJaSelecionado = document.querySelector('.prato .selecionado');
    if (pratoJaSelecionado !== null){
        pratoJaSelecionado.classList.remove('selecionado');
    }
    // pegar o botao clicado
    // const botao = document.querySelector(this);
    botao.classList.add('selecionado');
    prat = botao.innerHTML;
}
let bebi;
function selecionarBebida(bebida){
    const bebidaJaSelecionada = document.querySelector('.bebida .selecionado');
    if (bebidaJaSelecionada !== null){
        bebidaJaSelecionada.classList.remove('selecionado');
    }
    // pegar o botao clicado
    bebida.classList.add('selecionado');
    bebi = bebida.innerHTML;
}
let sobrem;
function selecionarSobremesa(sobremesa){
    const sobremesaJaSelecionada = document.querySelector('.sobremesa .selecionado');
    if (sobremesaJaSelecionada !== null){
        sobremesaJaSelecionada.classList.remove('selecionado');
    }
    // pegar o botao clicado
    sobremesa.classList.add('selecionado');
    sobrem = sobremesa.innerHTML;
}
function pedidoFechado(){
    
    if (prat !== null){
        if (bebi !== null){
            if (sobrem !== null){
                const requisito = document.querySelector('.selecionar');
                requisito.classList.add('escondido');
                const conta = document.querySelector('.fechar');
                conta.classList.remove('escondido');
            }
        }
    }
   
}



function dadosCliente(){
    const nome = prompt("Qual o seu nome?")
    const endereco = prompt("Qual o seu endereço?")
}



/* const prompt("Qual o seu endereço?") */

// https://wa.me/<5521970027981>

// Olá, gostaria de fazer o pedido:
// - Prato: Frango Yin Yang
// - Bebida: Coquinha Gelada
// - Sobremesa: Pudim
// Total: R$ 27.70

// https://wa.me/5521970027981?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%20