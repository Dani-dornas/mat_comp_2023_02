//POR RECURSÃO

function pa_recursiva(
  primeiro: number,
  diferenca: number,
  indice: number
): number {
  if (indice === 1) {
    return primeiro;
  } else {
    return pa_recursiva(primeiro, diferenca, indice - 1) + diferenca;
  }
}

const primeiroTermo = 3;
const diferenca = 5;
const indiceTermo = 4;

const resultado = pa_recursiva(
  primeiroTermo,
  diferenca,
  indiceTermo
);

console.log(`O termo na posição ${indiceTermo} da progressão é: ${resultado}`);

//POR ITERAÇÃO

function pa_iterativa(a1: number, dif: number, n: number): number {
  let termo = a1;
  for (let i = 1; i < n; i++) {
      termo += dif;
  }
  return termo;
}

const termo1 = 3;
const dif = 5;
const ind = 4;

const resposta = pa_iterativa(primeiroTermo, diferenca, indiceTermo);
console.log(`O termo na posição ${indiceTermo} da progressão é: ${resultado}`);
