/* eslint-disable no-unused-vars */
import { iComponent } from '../interfaces/component.js';
import {PokemonModel} from '../models/Pokemon.js'
import { PokeService } from '../services/pokeService.js';
import { Component } from './component.js';

export class ItemPokemon extends Component implements iComponent {
    constructor(selector: string, public item: PokemonModel, public favorites: Array<number>) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        this.item = item;
    }

    createTemplate() {
        return `
        <li>
            <div>${this.item.id}</div>
            <div>${this.item.name}</div>
            <div><img src="${this.item.sprites.front_default}" alt="${this.item.name}'s image"></div>
            <div><i class="add-fav" ><img data-id="${this.item.id}" src="${this.favorites.includes(+this.item.id) ? './assets/favorite.png' : './assets/no-favorite.png'}" alt="star"></i></div>
        </li>
        `;
    }

}
