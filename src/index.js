import { Mago } from "./modules/mago.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";
// import { Personagem } from "./modules/personagem.js";

const magoCallum = new Mago('Callum', 'Fogo', 6, 8)
const magaTiamat = new Mago('Tiamat', 'Gelo', 7, 10);
const magoGandalf = new Mago('Gandalf', 'Ar', 8, 7);
const magaMorgana = new Mago('Morgana', 'Água', 9, 8);
const arqueiroLegolas = new Arqueiro('Legolas', 10);
const arqueiraTauriel = new Arqueiro('Tauriel', 7);
const arqueiroClint = new Arqueiro('Clint', 9);
const arqueiroVerde = new Arqueiro('Oliver', 10);
const arqueiraMagaAntiope = new ArqueiroMago('Antíope', 10, 'Fogo', 9, 8);
const arqueiraMagaAtalanta = new ArqueiroMago('Atalanta', 8, 'Terra', 6, 9);
const arqueiroMagoPedrinho = new ArqueiroMago('Pedrinho', 8, 'Ar', 7, 6);
const guerreiroAragorn = new Guerreiro('Aragorn', 9);
const guerreiraDiana = new Guerreiro('Diana', 10);
const guerreiraRayla = new Guerreiro('Rayla', 7);
const guerreiroSteve = new Guerreiro('Steve', 8);
const guerreiraBrunhilde = new Guerreiro('Brunhilde', 9);

const personagens = [magoCallum, magaTiamat, magaMorgana, magoGandalf, arqueiroLegolas, arqueiraTauriel, arqueiroClint, arqueiroVerde, arqueiraMagaAntiope, arqueiraMagaAtalanta, arqueiroMagoPedrinho, guerreiroAragorn, guerreiraRayla, guerreiraDiana, guerreiraBrunhilde, guerreiroSteve];

new PersonagemView(personagens).render();





