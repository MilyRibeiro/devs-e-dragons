import { Mago } from "./modules/mago.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoPedrinho = new Mago('Antonio', 4, 'Fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroLegolas = new Arqueiro('Legolas', 7, 8);
const arqueiroMagoClint = new ArqueiroMago('Clint', 7, 10, 'Ar', 4, 8);

const personagens = [magoPedrinho, magaJulia, arqueiroLegolas, arqueiroMagoClint];

new PersonagemView(personagens).render();




