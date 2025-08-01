import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = 'ArqueiroMago';
  static descricao = 'Detentor de lanças e flechas mágicas!';

  constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
  };

  obterInsignia() {
    if (this.level >= 6 && this.destreza >= 7 && this.levelMagico >= 7) {
      return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
    };

    return super.obterInsignia();
  };
};