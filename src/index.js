import { Mago } from "./modules/mago.js";
// import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Arqueiro } from "./modules/arqueiro.js";

// const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
// const personagemJose = new Personagem('José', 3, 'Arqueiro');
const magoPedrinho = new Mago('Antonio', 4, 'Fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroLegolas = new Arqueiro('Legolas', 7, 8);
const personagens = [magoPedrinho, magaJulia, arqueiroLegolas];

// const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render();




