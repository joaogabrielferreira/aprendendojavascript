function CalcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value); //const altura recebe um elemento pelo id colocado no html
    const peso = parseFloat(document.getElementById('peso').value); //const peso recebe um elemento pelo id colocado no html
    const nome = document.getElementById('nome').value; //const nome recebe um elemento pelo id colocado no html

    //Se o nome e a altura e o peso
    if (nome && altura && peso) {
        const imc = (peso / (altura * altura)).toFixed(2); //const ims recebe o peso dividido pela altura vezes ela mesma e o .toFixed(2) ele vai contar duas casas após o ponto
        let classificacao = ''; //classificacao vai receber um valor

        //Se imc for menor que 18.5
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso'; //classificacao recebe uma mensagem dizendo que você está abaixo do peso
            //Senão se imc maior ou igual a 18.5 e imc menor que 25
        } else if (imc >= 18.5 && imc < 25) {
            classificacao = 'Peso normal'; //classificacao recebe uma mensagem dizendo que você está com o peso normal
            //Senão se imc for maior ou igual a 25 e imc menor que 30
        } else if (imc >= 25 && imc < 30) {
            classificacao = 'Sobrepeso'; //classificacao recebe uma mensagem que você está sobrepeso
            //Senão
        } else {
            classificacao = 'Obesidade'; //classificacao recebe uma mensagem que você está obeso
        }

        document.getElementById('result').innerHTML = `${nome}, seu IMC é ${imc} (${classificacao})`; //O documento recebe um elemento pelo id resultado juntando com o HTML uma mensagem
        //Senão for digitado nada nos campos de texto vai aparecer uma mensagem dizindo por favor, preencha todos os campos
    } else {
        document.getElementById('result').innerHTML = 'Por favor, preencha todos os campos!';
    }
}

function Clear() {
    
}