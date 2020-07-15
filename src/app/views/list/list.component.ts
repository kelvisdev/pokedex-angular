import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameFilter = '';

  selectedPkm = null;

  get pokemonList() {
    return this.pokeApi.pokemonList ? this.pokeApi.pokemonList.filter(pokemon => {
      return pokemon
        .name
        .toLowerCase()
        .indexOf(this.nameFilter.toLowerCase()) !== -1;
    }) : [];
  }

  get pkmSprite(){
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(private pokeApi: PokeapiService) { }

  ngOnInit() {
    this.pokeApi.listAll();
  }

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
