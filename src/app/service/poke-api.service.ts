import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  public url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";

  constructor(private http: HttpClient) { }

  get apiListAllPokedex(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res: any) => res),
      tap((res: any) => {
        res.results.map((resPokemons: any) => {
          this.getAllPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public getAllPokemons(urlPokemon: string): Observable<any> {
    return this.http.get<any>(urlPokemon).pipe(
      map(
        res => res
      )
    )

  }
}

