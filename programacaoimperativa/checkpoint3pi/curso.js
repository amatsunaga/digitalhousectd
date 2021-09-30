// Importação de módulos
const aluno = require('./aluno');
const estudantes = require('./estudantes');

// Criação do objeto literal curso
let curso = {
    nome: 'Certified Tech Developer',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes,

    addAluno: function(_nome, _qntFaltas, _notas) {
        let novoAluno = new aluno.Aluno(_nome, _qntFaltas, _notas);
        (this.listaEstudantes).push(novoAluno);
    },

    aprovaAluno: function(nomeAluno){
        for (estudante of this.listaEstudantes) {
            if (nomeAluno == estudante.nome) {
                let mediaAluno = estudante.calcularMedia();
                let faltasAluno = estudante.qntFaltas;

                if (mediaAluno >= this.notaAprovacao && faltasAluno < this.faltasMaximas) {
                    return true;
                } else if (faltasAluno == this.faltasMaximas && mediaAluno >= (this.notaAprovacao * 1.1)) {
                    return true;
                } else return false;
            }            
        }
    },

    alunosAprovados: function() {
        let alunosAprovados = [];
        for (estudante of this.listaEstudantes) {
            alunosAprovados.push(this.aprovaAluno(estudante.nome));
        }
        return alunosAprovados;
    },
}



// Testes

// console.log(curso.listaEstudantes);
// curso.addAluno('Joselito', 5, [4, 3, 7]);
// console.log(curso.listaEstudantes);

// console.log(curso.aprovaAluno('aluno1'), curso.aprovaAluno('aluno2'), curso.aprovaAluno('aluno3'), curso.aprovaAluno('aluno4'), curso.aprovaAluno('aluno5'), curso.aprovaAluno('aluno6'), curso.aprovaAluno('Joselito'));

// console.log(curso.alunosAprovados());

// curso.listaEstudantes = aluno.listaAlunos;

// console.log(curso.listaEstudantes);
// curso.addAluno('Joselita', 5, [4, 3, 7]);
// console.log(curso.listaEstudantes);

// console.log(curso.aprovaAluno('Andrea'), curso.aprovaAluno('Maiara'), curso.aprovaAluno('Adilane'), curso.aprovaAluno('Lucas'), curso.aprovaAluno('Jeferson'), curso.aprovaAluno('Davi'), curso.aprovaAluno('Joselita'));

// console.log(curso.alunosAprovados());