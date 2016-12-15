import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-character-gender',
  templateUrl: './character-gender.component.html',
  styleUrls: ['./character-gender.component.css']
})
export class CharacterGenderComponent implements OnInit {
  @Input() gender: string;

  constructor() { }

  ngOnInit() {
  }

}
