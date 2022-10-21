import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { Pokemons1Component } from './components/pokemons1/pokemons1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PokemonService } from './services/pokemon.service';
import { Pokemon2Service } from './services/pokemon2.service';
import { Pokemon3Service } from './services/pokemon3.service';
import { AddPokemonsComponent } from './components/add-pokemons/add-pokemons.component';
import { Pokemons2Component } from './components/pokemons2/pokemons2.component';
import { Pokemons3Component } from './components/pokemons3/pokemons3.component';
import { AddPokemons2Component } from './components/add-pokemons2/add-pokemons2.component';
import { AddPokemons3Component } from './components/add-pokemons3/add-pokemons3.component';
import { AuthComponent } from './auth/auth/auth.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    Pokemons1Component,
    Pokemons2Component,
    Pokemons3Component,
    AddPokemonsComponent,
    AddPokemons2Component,
    AddPokemons3Component,
    AuthComponent,
    LoadingSpinnerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'fireProject'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService, Pokemon2Service, Pokemon3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }