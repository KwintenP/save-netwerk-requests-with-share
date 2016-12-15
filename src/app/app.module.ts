import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StarWarsService} from '../services/star-wars.service';
import {CharacterBirthdateComponent} from './character-birthdate/character-birthdate.component';
import {CharacterNameComponent} from './character-name/character-name.component';
import {CharacterGenderComponent} from './character-gender/character-gender.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterBirthdateComponent,
    CharacterNameComponent,
    CharacterGenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
