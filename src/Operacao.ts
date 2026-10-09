export abstract class Operacao {
  private _nome: string;
  private _quantidade: number;

  constructor(nome: string, quantidade: number) {
    this._nome = nome;
    this._quantidade = quantidade;
  }

  get nome(): string {
    return this._nome;
  }

  get quantidade(): number {
    return this._quantidade;
  }
  abstract calcular(n: number[]): string;
}