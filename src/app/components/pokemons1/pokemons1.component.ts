import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons1',
  templateUrl: './pokemons1.component.html',
  styleUrls: ['./pokemons1.component.scss']
})
export class Pokemons1Component implements OnInit {
  pokemons: Pokemon[];
  editState: boolean = false;
  pokemonToEdit: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(pokemons => {
      console.log(pokemons);
      // set pokemons from subscription to getPokemons() equal to pokemons from Pokemon[] array
      this.pokemons = pokemons;
    })
  }

  deletePokemon(event, pokemon) {
    this.clearState();
    this.pokemonService.deletePokemon(pokemon);
  }

  editPokemon(event, pokemon: Pokemon) {
    this.editState = true;
    this.pokemonToEdit = pokemon;
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemonService.updatePokemon(pokemon);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.pokemonToEdit = null;
  }

}