import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public urlPokemon: string = "https://pokeapi.co/api/v2/pokemon"
  public urlname: string = "https://pokeapi.co/api/v2/pokemon-species"

  public isLoading: boolean = false
  public itsError: boolean = false


  constructor(
    private activedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService) { }

  public pokemon: any;

  ngOnInit(): void {
    this.getPokemon
  }

  get getPokemon() {
    const id = this.activedRoute.snapshot.params['id']
    const pokemon = this.pokeApiService.getAllPokemons(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.getAllPokemons(`${this.urlname}/${id}`)


    return forkJoin([pokemon, name]).subscribe(res => {
      this.isLoading = true;
      this.pokemon = res
    }, error => {
      this.itsError = true
    }
 
    )
  }

}
