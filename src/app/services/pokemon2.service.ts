import { Pokemon2 } from './../models/pokemon2.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class Pokemon2Service {
    pokemonsCollection2: AngularFirestoreCollection<Pokemon2>;
    // initialized as an observable
    pokemons2: Observable<Pokemon2[]>;
    pokemonDoc2: AngularFirestoreDocument<Pokemon2>;
  
    constructor(public afs: AngularFirestore) {
      // value changes returns collection as an observable, like a data stream
      //this.pokemons = this.afs.collection('pokemons').valueChanges();
      this.pokemonsCollection2 = this.afs.collection('pokemons2');
  
      this.pokemons2 = this.pokemonsCollection2.snapshotChanges().pipe(map(changes => {
        return changes.map(b => {
          // how we return the payload from firebase as a pokemon
          const data2 = b.payload.doc.data() as Pokemon2;
          // this is how we get id
          data2.id = b.payload.doc.id;
          return data2;
        });
      }));
    }
  
    // this is what we're gonna return from our component
    getPokemons() {
      return this.pokemons2;
    }
  
    addPokemon(pokemons2: Pokemon2) {
      // add the pokemon to the existing pokemonsCollection
      this.pokemonsCollection2.add(pokemons2);
    }
  
    deletePokemon(pokemons2: Pokemon2) {
      // using the template string to grab the id of pokemon in pokemons
      this.pokemonDoc2 = this.afs.doc(`pokemons2/${pokemons2.id}`);
      this.pokemonDoc2.delete();
    }
  
    updatePokemon(pokemons2: Pokemon2) {
      this.pokemonDoc2 = this.afs.doc(`pokemons2/${pokemons2.id}`);
      this.pokemonDoc2.update(pokemons2);
    }
  }