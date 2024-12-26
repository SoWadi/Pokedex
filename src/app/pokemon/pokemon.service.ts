import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()


export class PokemonService {

  pokemonService_getPokemonList(): Pokemon[] {
    return POKEMONS
  }

  pokemonService_getPokemonById(pokemonId: number): Pokemon|undefined {
    console.log("coucou");
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }
  
  getPokemonTypeList():string[] {
    return  ["Plante", 
    "Feu", 
    "Eau", 
    "Insecte", 
    "Normal", 
    "Electric", 
    "Poison", 
    "Fée",
    "Vol", 
    "Combat",
    "Psy",
    ]
  }
}
