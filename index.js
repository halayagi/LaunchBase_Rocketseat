// LaunchBase Desafio 1-1
// Cálculo de IMC

const nome = "Lucas";
const sexo = "Masculino";
const peso = 70;
const altura = 1.70;

const imc  = peso / (altura * altura)

if ( imc >= 30) {
    console.log(`${nome} está acima do peso. IMC é igual a ${imc}.`)
} else {
    console.log(`${nome} não está acima do peso. IMC é igual a ${imc}`)
}

// Cálculo de aposentadoria

