import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BracketComponent } from './bracket/bracket.component';
import { BracketService } from './bracket/bracket.service';
import { MatchupComponent } from './matchup/matchup.component';
import { BracketMatchupComponent } from './bracket/matchup/matchup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BracketComponent,
    MatchupComponent,
    BracketMatchupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BracketComponent
      },
      {
        path: 'matchup/:id',
        component: MatchupComponent
      }
    ]),
    HttpModule
  ],
  providers: [
    BracketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
