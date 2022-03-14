import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.css']
})
export class PokerListComponent implements OnInit {

  public getAllPokemons: any;
  public setAllPokemons: any; 

  public itsError: boolean = false


  constructor( private pokeApiService: PokeApiService ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokedex.subscribe(
      res => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
        
        
      },
      error => { 
        this.itsError= true;
      }
    )
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value)
    })

    this.getAllPokemons = filter
  }


}
