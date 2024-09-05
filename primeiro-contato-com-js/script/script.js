var lampada = document.getElementById("lampada");
//Variável do tipo var chamada lampada que recebe um elemento pelo id
let lampadaquebrada = false;
//Variável do tipo local ou let chamada lampadaquebrada que recebe falso

function LampadaAcesa() {
//Função LamapadaAcesa
    if (!lampadaquebrada) {
    //Se não for verdadeiro, ou seja, é falso
        document.getElementById("lampada").src = "img/lampada-acesa.jpg";
        document.getElementById("interruptor").src = "img/interruptordesligado.jpg";
        //Após o .src vai receber a imagem da lâmpada acesa
    }

}

function LampadaApagada() {
//Função LampadaApagada
    if (!lampadaquebrada) { 
    //Se não for verdadeiro, ou seja, é falso
        document.getElementById("lampada").src = "img/lampada-apagada.jpg";
        document.getElementById("interruptor").src = "img/interruptor.jpg";
        //Após o .src vai receber a imagem da lâmpada apagada
    }
}

function LampadaQuebrada() {
//Função LampadaQuebrada
    lampadaquebrada = true;
    //A variável lampadaquebrada recebe true
    document.getElementById("lampada").src = "img/lampada-quebrada.jpg";
    //Após o .src vai receber a imagem da lâmpada quebrada
}