// LaunchBase 
// Desafio 1-1: Primeiros passos com JS
// Cálculo de IMC

const nome = 'Lucas';
const sexo = 'Masculino';
const peso = 70;
const altura = 1.70;

const imc  = peso / (altura * altura)

if ( imc >= 30) {
    console.log(`${nome} está acima do peso. IMC é igual a ${imc}.`)
} else {
    console.log(`${nome} não está acima do peso. IMC é igual a ${imc}`)
}

// Cálculo de aposentadoria

const nomeAp = 'Maria'
const sexoAp = 'Feminino'
const idadeAp = 58
const contribuicaoAp = 21

/* Regras de aposentadoria:
 - O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos; 
 - Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma. */

const somaAp = idadeAp + contribuicaoAp 

if ( sexo == 'Masculino' && contribuicaoAp < 35 ) {
    if ( somaAp >= 95 ) {
        console.log(`${nomeAp}, você pode se aposentar!`)
    } else {
        console.log(`${nomeAp}, você ainda não pode se aposentar!`)
    }
} else {
    console.log(`${nomeAp}, você pode se aposentar!`)
}