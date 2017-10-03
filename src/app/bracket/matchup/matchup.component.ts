import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bracket-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.css']
})
export class BracketMatchupComponent implements OnInit {
  @Input() title: string;
  @Input() data: any;
  
  constructor() {}

  ngOnInit(): void {
  }
}
