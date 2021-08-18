function Cliente(nome, sobrenome, idade, peso, altura, plano) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
  this.peso = peso
  this.altura = altura
  this.imc = (this.peso / this.altura ** 2).toFixed(2)
  this.plano = plano
  if (plano == 'Não Possui') {
    return (this.temPlano = 'Não')
  } else return (this.temPlano = 'Sim')
}

var cliente0 = new Cliente('José', 'da Silva', 27, 83.5, 1.7, 'Ouro')

var cliente1 = new Cliente('Carlos', 'de Souza', 28, 80.1, 1.76, 'Diamante')

var cliente2 = new Cliente('Aline', 'Ferreira', 33, 63.7, 1.53, 'Não Possui')

var cliente3 = new Cliente('Ana', 'Paula', 26, 55, 1.62, 'Prata')

var clientes = [cliente0, cliente1, cliente2, cliente3]

for (var i = 0; i < clientes.length; i++) {
  console.log(
    clientes[i].nome +
      ' ' +
      clientes[i].sobrenome +
      ' tem ' +
      clientes[i].idade +
      ' anos e seu índice de massa corporal é de ' +
      clientes[i].imc +
      '. Tem plano? ' +
      clientes[i].temPlano +
      '. Qual? ' +
      clientes[i].plano +
      '.'
  )
}
