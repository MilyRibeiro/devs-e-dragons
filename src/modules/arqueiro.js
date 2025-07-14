import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  static tipo = 'Arqueiro';
  static descricao = 'Você tem o meu arco!'
  destreza;

  constructor(nome, destreza) {
    super(nome);
    this.destreza = destreza;
  };

  obterInsignia() {
    if (this.level >= 8 && this.destreza >= 6 && this.level >= 8) {
      return 'Dominador de flechas';
    }
    return super.obterInsignia();
  };
};