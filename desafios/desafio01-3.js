// LaunchBase 
// Desafio 1-3: Funções e estruturas de repetição
// Usuários e tecnologias

const usuarios = [
    {nome: 'Sara', tecnologias: ['PHP', 'HTML', 'CSS']},
    {nome: 'Paulo', tecnologias: ['HTML', 'CSS', 'JavaScript']},
    {nome: 'Miguel', tecnologias: ['PHP', 'JavaScript', 'React']},
    {nome: 'Helen', tecnologias: ['JavaScript', 'NodeJS', 'PHP']}
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Busca por tecnologia

function userCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }
        return false
}

for (let i = 0; i < usuarios.length; i++) {
    const workCSS = userCSS(usuarios[i]);
    if (workCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}

// Soma de despesas e receitas

const usuarios2 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

function calculaSaldo (receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma = soma + numero
    }
    return soma
}

for (let usuario of usuarios2) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if (saldo >= 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)  
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)  
    }
}
