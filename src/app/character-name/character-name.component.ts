import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'app-character-name',
  templateUrl: './character-name.component.html',
  styleUrls: ['./character-name.component.css']
})
export class CharacterNameComponent implements OnInit {
  @Input() name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
