import { Pokemon2 } from './../../models/pokemon2.model';
import { Pokemon2Service } from './../../services/pokemon2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemons2',
  templateUrl: './add-pokemons2.component.html',
  styleUrls: ['./add-pokemons2.component.scss']
})
export class AddPokemons2Component implements OnInit {

  pokemon2: Pokemon2 = {
    name: '',
    hp: null,
    atk: null,
    def: null
  }

  constructor(private pokemon2Service: Pokemon2Service) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.pokemon2.name != '' && this.pokemon2.hp != 0 && this.pokemon2.atk != 0 && this.pokemon2.def != 0) {
      this.pokemon2Service.addPokemon(this.pokemon2);
      this.pokemon2.name = '';
      this.pokemon2.hp = null;
      this.pokemon2.atk = null;
      this.pokemon2.def = null;
    }
  }


}
