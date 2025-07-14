import { Mago } from "./modules/mago.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";
// import { Personagem } from "./modules/personagem.js";

const magoPedrinho = new Mago('Pedrinho', 'Fogo', 6, 3)
const magaJulia = new Mago('Julia', 'Gelo', 7, 10);
const arqueiroLegolas = new Arqueiro('Legolas', 10);
const arqueiraTauriel = new Arqueiro('Tauriel', 7);
const arqueiroMagoClint = new ArqueiroMago('Clint', 7, 'Ar', 9, 8);
const arqueiraMagaAtalanta = new ArqueiroMago('Atalanta', 8, 'Terra', 6, 9);
const guerreiroAragorn = new Guerreiro('Aragorn', 8);
const guerreiraRayla = new Guerreiro('Rayla', 7);

const personagens = [magoPedrinho, magaJulia, arqueiroLegolas, arqueiraTauriel, arqueiroMagoClint, arqueiraMagaAtalanta, guerreiroAragorn, guerreiraRayla];

new PersonagemView(personagens).render();





