import { PokemonModel } from '../models/Pokemon.js';

let pokemons = [
    new PokemonModel('1', 'Pikachu', {front_default: 'dfdfdf'}),
    new PokemonModel('2', 'Bulbasur', {front_default: 'dfdfdf'}),
    new PokemonModel('3', 'Charizard', {front_default: 'dfdfdf'}),
];

export const POKEMONS: Array<PokemonModel> = pokemons
