
// pegando o botao de calcular
const calcular = document.querySelector("#calcular");

// adicionando evento de clique para o botão de calcular
calcular.addEventListener('click', calculaIMC);

// funcção que executa toda a lógica
function calculaIMC(){

    // pegando o nome informado
    const nome = document.querySelector("#nome");

    // pegando o valor do input de altura
    const altura = document.querySelector("#altura").value;

    // pegando o valor do input de peso
    const peso = document.querySelector("#peso").value;

    // pegando a div de resultado
    const resultado = document.querySelector("#resultado");

    // verificando se os inputs estão vazios, se não estiver irá fazer o calculo
    if(nome.value != "" && peso.value != "" && altura.value != ""){

        // declarando variavel de mensagem como vazia
        let msg = "";

        // calculo do IMC
        let imc = ( peso / (altura * altura));

        // verificando o valor do IMC e mostrando mensagem de acordo com a condição
        if(imc <= 18.5){
            msg = "você está abaixo do peso!";
        }

        // verificando o valor do IMC e mostrando mensagem de acordo com a condição
        if(imc > 18.6 && imc <= 24.9){
            msg = "você está com seu IMC ideal!";
        }

        // verificando o valor do IMC e mostrando mensagem de acordo com a condição
        if(imc > 25 && imc <= 29.9){
            msg = "você está com Sobrepeso!";
        }

        // verificando o valor do IMC e mostrando mensagem de acordo com a condição
        if(imc > 30 && imc <= 34.9){
            msg = "você está com Obesidade Grau I!";
        }

        // verificando o valor do IMC e mostrando mensagem de acordo com a condição
        if(imc > 35 && imc <= 39.9){
            msg = "você está com Obesidade Grau II!"
        }

        // verificando o valor do IMC e mostrando mensagem de acordo com a condição
        if(imc >= 40){
            msg = "você está com Obesidade Grau III (Obesidade Morbida)"
        }

        // colocando mensagem dentro da div de resultado
        resultado.innerText = `${nome.value}, seu IMC é de ${imc.toFixed(1)} e ${msg}`;
    }
    // se os valores dos inputs estiverem vazios, irá retornar esse alert
    else{
        resultado.innerText = "Preencha todos os Campos!"
    }

}
