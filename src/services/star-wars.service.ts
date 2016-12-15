import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishReplay';
import {StarWarsCharacter} from '../entities/star-wars-character.entity';
import {ConnectableObservable} from 'rxjs';
@Injectable()
export class StarWarsService {

  constructor(private http: Http) {

  }

  public getCharacter(id: number): Observable<StarWarsCharacter> {
    return this.http.get('https://swapi.co/api/people/' + id)
      .map((response: Response) => response.json());
  }

  public getCharacterWithShare(id: number): Observable<StarWarsCharacter> {
    return this.http.get('https://swapi.co/api/people/' + id)
      .map((response: Response) => response.json())
      .share();
  }

  public getCharacterWithPublishReplay(id: number): Observable<StarWarsCharacter> {
    let obs$: ConnectableObservable<StarWarsCharacter> = this.http.get('https://swapi.co/api/people/' + id)
      .map((response: Response) => response.json())
      .publishReplay();
    obs$.connect();
    return obs$;
  }
}
