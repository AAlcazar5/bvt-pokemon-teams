import { AuthGuard } from './auth/auth/auth.guard';
import { Pokemon } from './models/pokemon';
import { AddPokemonsComponent } from './components/add-pokemons/add-pokemons.component';
import { AddPokemons2Component } from './components/add-pokemons2/add-pokemons2.component';
import { Pokemons3Component } from './components/pokemons3/pokemons3.component';
import { Pokemons2Component } from './components/pokemons2/pokemons2.component';
import { Pokemons1Component } from './components/pokemons1/pokemons1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [

  {
    path: '',
    component: Pokemons1Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'team-1',
    component: Pokemons1Component,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'team-1/#',
        redirectTo: 'team-1/#'
      }
    ]
  },

  {
    path: 'team-2',
    component: Pokemons2Component,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'team-2/#',
        redirectTo: 'team-2/#'
      }
    ]
  },

  {
    path: 'team-3',
    component: Pokemons3Component,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'team-3/#',
        redirectTo: 'team-3/#'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }