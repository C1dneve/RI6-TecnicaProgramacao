import { Operacao } from "./Operacao";

export class Potencia extends Operacao {
  constructor() { super("Potência", 2); }

  calcular(n: number[]): string {
    return `${n[0]} ^ ${n[1]} = ${n[0] ** n[1]}`;
  }
}

export class Radiciacao extends Operacao {
  constructor() { super("Radiciação (radicando e índice)", 2); }

  calcular(n: number[]): string {
    if (n[1] === 0) throw new Error("O índice da raiz não pode ser zero.");
    if (n[0] < 0) throw new Error("Radicando negativo não pode");
    return `raiz ${n[1]} de ${n[0]} = ${n[0] ** (1 / n[1])}`;
  }
}

export class Bhaskara extends Operacao {
  constructor() { super("Bhaskara (a, b, c)", 3); }

  calcular(n: number[]): string {
    const [a, b, c] = n;
    if (a === 0) throw new Error("'a' não pode ser zero.");
    const delta = b * b - 4 * a * c;
    if (delta < 0) return `Delta = ${delta}. raízes reais não exitem .`;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Delta = ${delta} | x1 = ${x1} | x2 = ${x2}`;
  }
}