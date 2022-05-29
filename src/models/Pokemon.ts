//es un constructor de cada pokemon, los detalles
/* eslint-disable no-unused-vars */

export class PokemonModel {
    constructor(
        public id: string, 
        public name: string, 
        public sprites:{
            front_default: string
        }
    ) {
        
    }
}
