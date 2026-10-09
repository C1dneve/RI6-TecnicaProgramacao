import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { Operacao } from "./Operacao";
import { Soma, Subtracao, Multiplicacao, Divisao } from "./OperacoesSimp";
import { Potencia, Radiciacao, Bhaskara } from "./OperacoesAvan";

async function main() {
  const rl = readline.createInterface({ input, output });
  const operacoes: Operacao[] = [
    new Soma(),
    new Subtracao(),
    new Multiplicacao(),
    new Divisao(),
    new Potencia(),
    new Radiciacao(),
    new Bhaskara(),
  ];

  while (true) {
    console.log("\n calculadora");
    operacoes.forEach((op, i) => console.log(`${i + 1} ${op.nome}`));
    console.log("0 Sair");

    const escolha = Number(await rl.question("escolha uma das opcoes: "));
    if (escolha === 0) break;

    const op = operacoes[escolha - 1];
    if (!op) {
      console.log("Opção inválida.");
      continue;
    }

    const numeros: number[] = [];
    for (let i = 0; i < op.quantidade; i++) {
      numeros.push(Number(await rl.question(`Número ${i + 1}: `)));
    }

    try {
      console.log(op.calcular(numeros));
    } catch (e) {
      console.log("Erro:", (e as Error).message);
    }
  }

  rl.close();
}

main();