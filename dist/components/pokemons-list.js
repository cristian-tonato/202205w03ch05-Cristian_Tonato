//import { HttpStoreClass } from '../services/http.store.class.js';
// import * as store from '../services/store.js';
//import { StoreClass } from '../services/store.class.js';
//import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemPokemon } from './pokemon.js';
import { POKEMONS } from '../models/data.js';
export class PokemonList extends Component {
    selector;
    pokemons;
    //storeService: HttpStoreClass;
    constructor(selector) {
        super();
        this.selector = selector;
        this.pokemons = POKEMONS;
        this.updateComponent();
    }
    //creamos template y se llama a array.para que se repita
    createTemplate() {
        let html = `
        <ul class="list__container-list"></ul>`;
        //console.log(this.pokemons)
        this.pokemons.forEach((item) => {
            html += new ItemPokemon('', item).template;
        });
        /*llamamos a pokemons y usamos this. constructor neceista propiedades
        */
        this.pokemons;
        html += `</ul>`;
        return html;
    }
    manageComponent() {
        /*document
            .querySelectorAll('.button')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
        document
            .querySelectorAll('[type=checkbox]')
            .forEach((item) =>
                item.addEventListener('change', this.handlerChange.bind(this))
            );*/
    }
    updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();
        //new AddTask('slot.addTask', this.addTask.bind(this));
    }
}
