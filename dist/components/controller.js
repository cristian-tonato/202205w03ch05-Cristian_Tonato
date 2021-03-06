import { PokeService } from '../services/pokeService.js';
import { PokemonList } from './pokemons-list.js';
// import { StoreClass } from '../services/store.class.js';
export class Controller {
    start;
    // handlerButton: Function;
    constructor(start = 1) {
        this.start = start;
        const promises = [];
        this.start = start;
        for (let i = this.start; i < this.start + 10; i++) {
            promises.push(PokeService.getPokemon(i));
        }
        Promise.all(promises).then((array) => {
            new PokemonList('.list__container-list', array);
        });
    }
}
