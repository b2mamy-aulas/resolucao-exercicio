
/**
* Crie um programa que utilize os valores do objeto pessoa e imprima uma string no seguinte formato:
*   
*   João Silva recebe R$ 2000. Após contabilizar suas despesas, ele ainda possui R$ 550 reais sobrando. 
*
* Faça mais testes trocando os valores da variável do objeto pessoa.
*  
*/

let pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  salario: 2000,
  despesas: {
      contas: 400,
      aluguel: 700,
      poupanca: 200,
  }
};

////////////// formato 1

const contabilidade = (pessoa) => {
    let soma = pessoa.despesas.contas + pessoa.despesas.aluguel + pessoa.despesas.poupanca;
    let saldo = pessoa.salario - soma;
    console.log(pessoa.nome + " " + pessoa.sobrenome + " recebe R$ " + pessoa.salario + ". Após contabilizar suas despesas, seu saldo é de R$ " + saldo)
}

contabilidade(pessoa);

/////////////// formato 2

const usuario = pessoa.despesas
let saldoUser = 0;

const somaDespesas = (usuario) => {
  let soma = usuario.contas + usuario.aluguel + usuario.poupanca;
  return soma;
}

const saldoFinal = (pessoa) => {
  saldoUser = pessoa.salario - somaDespesas(usuario);
  return saldoUser;
}

saldoFinal(pessoa);

console.log(pessoa.nome + " " + pessoa.sobrenome + " recebe R$ " + pessoa.salario + ". Após contabilizar suas despesas, seu saldo é de R$ " + saldoUser)

///////////// formato 3

const person = pessoa.despesas;
let valorTotal = 0;
let saldoPessoa = 0;

const despesas = (person) => {
  for(let valores in person){
    //console.log(valores, "é a chave e seu valor é", person[valores]);
    valorTotal += person[valores];
  }
  return valorTotal;
}

const conta = () => {
  saldoPessoa = pessoa.salario - valorTotal;
  return saldoPessoa;
}

despesas(person);
conta(pessoa);

console.log(pessoa.nome + " " + pessoa.sobrenome + " recebe R$ " + pessoa.salario + ". Após contabilizar suas despesas, seu saldo é de R$ " + saldoPessoa)
