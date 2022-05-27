/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import { PokemonModel } from '../models/Pokemon.js';
//import { HttpStoreClass } from '../services/http.store.class.js';
// import * as store from '../services/store.js';
//import { StoreClass } from '../services/store.class.js';

//import { AddTask } from './add-task.js';
import { Component } from './component.js';
import { ItemPokemon } from './pokemon.js';
import { POKEMONS } from '../models/data.js';

export class PokemonList extends Component implements iComponent {
    pokemons!: Array<PokemonModel>;
    //storeService: HttpStoreClass;
    constructor(public selector: string) {
        super();
        this.pokemons = POKEMONS;
        this.updateComponent()
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
        this.pokemons
        html += `</ul>`;
        return html;
    }
    private manageComponent() {
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
     
    private updateComponent() {
        this.template = this.createTemplate();
        this.render(this.selector);
        this.manageComponent();

        //new AddTask('slot.addTask', this.addTask.bind(this));
    }
    /*private handlerButton(ev: Event) {
        const deletedId = (<HTMLElement>ev.target).dataset.id as string;
        this.storeService.deleteTask(deletedId).then((status) => {
            if (status === 200) {
                this.pokemons = this.pokemons.filter((item) => item.id !== deletedId);
                this.updateComponent();
            }
        });
    }*/

   /* private handlerChange(ev: Event) {
        const changeId = (<HTMLElement>ev.target).dataset.id;
        console.log('change', changeId);
        const task = this.pokemons.find(
            (item) => item.id === changeId
        ) as PokemonModel;
        task.isComplete = !task.isComplete;
        this.storeService.updateTask(task).then((task) => {
            this.pokemons = this.pokemons.map((item) => ({
                ...item,
                isComplete:
                    item.id === changeId ? !item.isComplete : item.isComplete,
            }));
            this.updateComponent();
        });
    }*/

    /*public addTask(task: PokemonModel) {
        // this.pokemons = [...this.pokemons, task];
        this.storeService.setTask(task).then((task) => {
            this.pokemons.push(task);
            this.updateComponent();
        });
    }*/
}

