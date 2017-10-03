import { Component, Input, OnInit } from '@angular/core';
import { BracketService } from '../bracket/bracket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class MatchupComponent implements OnInit {
  @Input() title: string;

  constructor(
    private bracketService: BracketService
  ) {}

  ngOnInit(): void {
   
  }
}
