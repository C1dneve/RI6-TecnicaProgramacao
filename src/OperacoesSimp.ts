import { Operacao } from "./Operacao";

export class Soma extends Operacao {
  constructor() { super("Soma", 2); }

  calcular(n: number[]): string {
    return `${n[0]} + ${n[1]} = ${n[0] + n[1]}`;
  }
}

export class Subtracao extends Operacao {
  constructor() { super("Subtração", 2); }

  calcular(n: number[]): string {
    return `${n[0]} - ${n[1]} = ${n[0] - n[1]}`;
  }
}

export class Multiplicacao extends Operacao {
  constructor() { super("Multiplicação", 2); }

  calcular(n: number[]): string {
    return `${n[0]} * ${n[1]} = ${n[0] * n[1]}`;
  }
}

export class Divisao extends Operacao {
  constructor() { super("Divisão", 2); }

  calcular(n: number[]): string {
    if (n[1] === 0) throw new Error("Divisão por zero não é permitida.");
    return `${n[0]} / ${n[1]} = ${n[0] / n[1]}`;
  }
}