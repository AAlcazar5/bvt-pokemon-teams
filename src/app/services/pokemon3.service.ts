import { Pokemon3 } from './../models/pokemon3.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Pokemon3Service {
  pokemonsCollection3: AngularFirestoreCollection<Pokemon3>;
  // initialized as an observable
  pokemons3: Observable<Pokemon3[]>;
  pokemonDoc3: AngularFirestoreDocument<Pokemon3>;

  constructor(public afs: AngularFirestore) {
    // value changes returns collection as an observable, like a data stream
    //this.pokemons = this.afs.collection('pokemons').valueChanges();
    this.pokemonsCollection3 = this.afs.collection('pokemons3', ref => ref.orderBy('name', 'asc'));

    this.pokemons3 = this.pokemonsCollection3.snapshotChanges().pipe(map(changes => {
      return changes.map(c => {
        // how we return the payload from firebase as a pokemon
        const data = c.payload.doc.data() as Pokemon3;
        // this is how we get id
        data.id = c.payload.doc.id;
        return data;
      });
    }));
  }

  // this is what we're gonna return from our component
  getPokemons() {
    return this.pokemons3;
  }

  addPokemon(pokemon3: Pokemon3) {
    // add the pokemon to the existing pokemonsCollection
    this.pokemonsCollection3.add(pokemon3);
  }

  deletePokemon(pokemon3: Pokemon3) {
    // using the template string to grab the id of pokemon in pokemons
    this.pokemonDoc3 = this.afs.doc(`pokemons3/${pokemon3.id}`);
    this.pokemonDoc3.delete();
  }

  updatePokemon(pokemon3: Pokemon3) {
    this.pokemonDoc3 = this.afs.doc(`pokemons3/${pokemon3.id}`);
    this.pokemonDoc3.update(pokemon3);
  }
}