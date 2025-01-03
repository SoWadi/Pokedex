import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';



const pokemonRoutes: Routes = [
  {path: "pokemons", component: ListPokemonComponent},
  {path: "pokemons/:id", component: DetailPokemonComponent},
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ], 
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
