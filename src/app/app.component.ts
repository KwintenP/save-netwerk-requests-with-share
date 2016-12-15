import {Component, OnInit} from "@angular/core";
import {StarWarsService} from "../services/star-wars.service";
import {StarWarsCharacter} from "../entities/star-wars-character.entity";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private character$: Observable<StarWarsCharacter>;
  private name$: Observable<string>;
  private birthDate$: Observable<string>;
  private gender$: Observable<string>;

  private enabled: boolean = false;

  constructor(private starWarsService: StarWarsService) {

  }

  ngOnInit(): void {
    this.character$ = this.starWarsService.getCharacter(this.generateNumber());
    // this.character$ = this.starWarsService.getCharacterWithShare(this.generateNumber());
    // this.character$ = this.starWarsService.getCharacterWithPublishReplay(this.generateNumber());
    this.name$ = this.character$.map(character => character.name);
    this.birthDate$ = this.character$.map(character => character.birth_year);
    this.gender$ = this.character$.map(character => character.gender);
  }

  toggleEnabled(): void {
    this.enabled = !this.enabled;
  }

  private generateNumber(): number {
    return Math.round(Math.random() * 10) + 1;
  }
}
