import { Pokemon2 } from './../../models/pokemon2.model';
import { Component, OnInit } from '@angular/core';
import { Pokemon2Service } from '../../services/pokemon2.service'

@Component({
  selector: 'app-pokemons2',
  templateUrl: './pokemons2.component.html',
  styleUrls: ['./pokemons2.component.scss']
})
export class Pokemons2Component implements OnInit {
  pokemons2: Pokemon2[];
  editState: boolean = false;
  pokemonToEdit2: Pokemon2;
 
  constructor(private pokemon2Service: Pokemon2Service) { }
 
  ngOnInit() {
    this.pokemon2Service.getPokemons().subscribe(pokemons2 => {
      console.log(pokemons2);
      // set pokemons from subscription to getPokemons() equal to pokemons from Pokemon[] array
      this.pokemons2 = pokemons2;
    })
  }

  deletePokemon(event, pokemon2) {
    this.clearState();
    this.pokemon2Service.deletePokemon(pokemon2);
  }

  editPokemon(event, pokemon2: Pokemon2) {
    this.editState = true;
    this.pokemonToEdit2 = pokemon2;
  }

  updatePokemon(pokemon2: Pokemon2) {
    this.pokemon2Service.updatePokemon(pokemon2);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.pokemonToEdit2 = null;
  }
}
