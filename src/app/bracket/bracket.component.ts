import { Component, Input, OnInit } from "@angular/core";
import { BracketService } from "./bracket.service";
import { Bracket } from "../networking/bracket";

@Component({
  selector: "app-bracket",
  templateUrl: "./bracket.component.html",
  styleUrls: ["./bracket.component.css"]
})
export class BracketComponent implements OnInit {
  @Input() title: string;

  bracket: any;

  constructor(private bracketService: BracketService) {}

  ngOnInit(): void {
    this.bracketService.getBracket().then(bracket => {
      this.bracket = bracket;
    });
  }

  itemAt(conference: string, round: string, seed: number): any {
    if (this.bracket === undefined) {
      return undefined;
    }

    let teams = this.bracket.teams as any[];

    let team = teams.filter(x => {
      return (
        x.conference === conference && x.round === round && x.seed === seed
      );
    });

    if (team.length > 0) {
      return team[0];
    } else {
      return undefined;
    }
  }
}
