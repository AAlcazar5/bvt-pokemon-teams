import { Pokemon3 } from './../../models/pokemon3.model';
import { Pokemon3Service } from './../../services/pokemon3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons3',
  templateUrl: './pokemons3.component.html',
  styleUrls: ['./pokemons3.component.scss']
})
export class Pokemons3Component implements OnInit {

  pokemons3: Pokemon3[];
  editState: boolean = false;
  pokemonToEdit3: Pokemon3;

  constructor(private pokemon3Service: Pokemon3Service) { }

  ngOnInit() {
    this.pokemon3Service.getPokemons().subscribe(pokemons3 => {
      console.log(pokemons3);
      // set pokemons from subscription to getPokemons() equal to pokemons from Pokemon[] array
      this.pokemons3 = pokemons3;
    })
  }

  deletePokemon(event, pokemon3) {
    this.clearState();
    this.pokemon3Service.deletePokemon(pokemon3);
  }

  editPokemon(event, pokemon3: Pokemon3) {
    this.editState = true;
    this.pokemonToEdit3 = pokemon3;
  }

  updatePokemon(pokemon3: Pokemon3) {
    this.pokemon3Service.updatePokemon(pokemon3);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.pokemonToEdit3 = null;
  }
}