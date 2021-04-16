function calculadora(){


    var numeroInicial = prompt('Digite seu primeiro numero...');

    var sinal = prompt('Qual o sinal da sua operação ?');
    while(sinal != '+' && sinal != '-' && sinal != '/' && sinal != '*'){
        alert('Por favor insira um sinal real')
        sinal = prompt('Qual o sinal da sua operação ?');
    }
    var numeroFinal = prompt('Digite seu numero final...');

    numeroInicial = parseInt(numeroInicial);
    numeroFinal = parseInt(numeroFinal);

    var resultadoFinal = 0;

    if(sinal == '+'){
        resultadoFinal = numeroInicial + numeroFinal;
    }else if(sinal == '-'){
        resultadoFinal = numeroInicial - numeroFinal;
    }else if(sinal == '/'){
        resultadoFinal = numeroInicial / numeroFinal;
    }else if(sinal == '*'){
        resultadoFinal = numeroInicial * numeroFinal;
    }

    alert('o resultado é '+ resultadoFinal);
        
}
let meuBotao = document.getElementById("calculadora");
meuBotao.onclick = function (){ calculadora()
}


