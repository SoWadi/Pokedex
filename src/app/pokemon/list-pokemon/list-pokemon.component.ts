import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{
  pokemonList:Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService) 
    {}

    ngOnInit(): void {
        this.pokemonList = this.pokemonService.pokemonService_getPokemonList()
    }
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.id])
  } 

/*   pokemonSelected: Pokemon|undefined;
  

  selectPokemon(pokemonId:any){
    //const index: number = +(event.target as HTMLInputElement).value;
    //console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
    const id = +pokemonId;
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon_ => pokemon_.id == +pokemonId)
    if(pokemon) {
      console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon
    }
    
  } 
 */
}
