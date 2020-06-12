import { Pokemon } from './../../models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-add-pokemons',
  templateUrl: './add-pokemons.component.html',
  styleUrls: ['./add-pokemons.component.scss']
})
export class AddPokemonsComponent implements OnInit {
  pokemon: Pokemon = {
    name: '',
    hp: null,
    atk: null,
    def: null
  }

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.pokemon.name != '' && this.pokemon.hp != 0 && this.pokemon.atk != 0 && this.pokemon.def != 0) {
      this.pokemonService.addPokemon(this.pokemon);
      this.pokemon.name = '';
      this.pokemon.hp = null;
      this.pokemon.atk = null;
      this.pokemon.def = null;
    }
  }

}
