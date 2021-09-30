// Importação de módulo
const aluno = require('./aluno');

// Criando uma lista de estudantes aleatória
let criarListaEstudantes = function() {
    let listaEstudantes = [];    
    for (let i = 1; i <=6; i++) {
        let nome = `aluno${i}`;

        let qntFaltas = Number(((4 - 0) * Math.random()).toFixed(0));
        
        let notas = [];
        for (let j = 0; j < 3; j++) {
            let notaAleatoria = Number(((10 - 5) * Math.random() + 5).toFixed(0));
            notas.push(notaAleatoria);
        }
        listaEstudantes.push(new aluno.Aluno(nome, qntFaltas, notas));
    }    
    return listaEstudantes;
}

let estudantes = criarListaEstudantes();

// Exportação da lista criada
module.exports = estudantes;
