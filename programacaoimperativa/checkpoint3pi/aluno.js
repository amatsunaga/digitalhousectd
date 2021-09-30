// Função construtora
function Aluno(_nome, _qntFaltas, _notas) {
    this.nome = _nome;
    this.qntFaltas = _qntFaltas;
    this.notas = _notas;
    this.calcularMedia = function() {
        let somaNotas = 0;
        let qntNotas = (this.notas).length;
        let mediaNotas = 0;
        for(let nota of this.notas){
            somaNotas += nota;
            mediaNotas = Number((somaNotas / qntNotas).toFixed(2));
        }
        return mediaNotas;
    };
    this.faltas = function() {
        return ++this.qntFaltas;
    };
}

// Instanciando objetos
let aluno1 = new Aluno('Andrea', 2, [8, 9, 7]);
let aluno2 = new Aluno('Maiara', 1, [10, 8, 10]);
let aluno3 = new Aluno('Adilane', 0, [7, 7, 10]);
let aluno4 = new Aluno('Lucas', 3, [6, 10, 8]);
let aluno5 = new Aluno('Jeferson', 0, [7, 8, 9]);
let aluno6 = new Aluno('Davi', 4, [10, 10, 10]);

// Criando a lista de alunos (array de objetos)
let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

// Exportação da função construtora e da lista de alunos criada, como propriedades de um objeto
module.exports = {Aluno, listaAlunos}; 
