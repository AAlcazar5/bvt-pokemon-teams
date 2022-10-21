import { Pokemon3Service } from './../../services/pokemon3.service';
import { Pokemon3 } from './../../models/pokemon3.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemons3',
  templateUrl: './add-pokemons3.component.html',
  styleUrls: ['./add-pokemons3.component.scss']
})
export class AddPokemons3Component implements OnInit {

  pokemon3: Pokemon3 = {
    name: '',
    hp: null,
    atk: null,
    def: null
  }

  constructor(private pokemon3Service: Pokemon3Service) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.pokemon3.name != '' && this.pokemon3.hp != 0 && this.pokemon3.atk != 0 && this.pokemon3.def != 0) {
      this.pokemon3Service.addPokemon(this.pokemon3);
      this.pokemon3.name = '';
      this.pokemon3.hp = null;
      this.pokemon3.atk = null;
      this.pokemon3.def = null;
    }
  }

} 