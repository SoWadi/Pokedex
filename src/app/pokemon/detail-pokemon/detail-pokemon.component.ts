import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  providers: [PokemonService,
  ]
})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  pokemon :Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private pokemonService: PokemonService)
    {}

ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get("id");

    if (pokemonId) {
      this.pokemon = this.pokemonService.pokemonService_getPokemonById(+pokemonId) //this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }/* else {
      this.pokemon = undefined
    } 
    
    */
}

goToPokemonList(){
  this.router.navigate(["/pokemons"]);
}
}

