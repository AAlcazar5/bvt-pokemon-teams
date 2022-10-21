import { AuthService } from './../auth/auth/auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { map, take, exhaustMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireObject, AngularFireList, AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
// AngularFireObject = FirebaseObjectObservable
// AngularFireList = FirebaseListObservable

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonsCollection: AngularFirestoreCollection<Pokemon>;
  // initialized as an observable
  pokemons: Observable<Pokemon[]> = null;
  pokemonDoc: AngularFirestoreDocument<Pokemon>;

  constructor(public afs: AngularFirestore,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {

    const id = this.afs.createId();

    // value changes returns collection as an observable, like a data stream
    //this.pokemons = this.afs.collection('pokemons').valueChanges();
    this.pokemonsCollection = this.afs.collection('pokemons', ref => ref.orderBy('name', 'asc'));

    this.pokemons = this.pokemonsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        // how we return the payload from firebase as a pokemon
        const data = a.payload.doc.data() as Pokemon;
        // this is how we get id
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }


  // this is what we're gonna return from our component
  getPokemons() {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon) {
    // add the pokemon to the existing pokemonsCollection
    this.pokemonsCollection.add(pokemon);
  }

  deletePokemon(pokemon: Pokemon) {
    // using the template string to grab the id of pokemon in pokemons
    this.pokemonDoc = this.afs.doc(`pokemons/${pokemon.id}`);
    this.pokemonDoc.delete();
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemonDoc = this.afs.doc(`pokemons/${pokemon.id}`);
    this.pokemonDoc.update(pokemon);
  }
}