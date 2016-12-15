import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-character-birthdate',
  templateUrl: './character-birthdate.component.html',
  styleUrls: ['./character-birthdate.component.css']
})
export class CharacterBirthdateComponent implements OnInit {
  @Input() birthDate: string;

  constructor() { }

  ngOnInit() {
  }

}
