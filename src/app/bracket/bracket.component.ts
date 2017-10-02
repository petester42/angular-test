import { Component, Input, OnInit } from '@angular/core';
import { BracketService } from './bracket.service';
import { Bracket } from '../networking/bracket';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css']
})
export class BracketComponent implements OnInit {
  @Input() title: string;

  private bracket: Bracket;

  constructor(private bracketService: BracketService) {

  }

  ngOnInit(): void {
    this.bracketService.getBracket().then(bracket => {
      console.log(bracket);
      this.bracket = bracket;
    });
  }
}
