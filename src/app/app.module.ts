import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';

import { HttpClientModule} from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { TeamResultComponent } from './team-result/team-result.component';
import { HomeComponent } from './home/home.component';
import { GamePredictionComponent } from './game-prediction/game-prediction.component';
import { MyTeamResultsComponent } from './my-team-results/my-team-results.component';
import { MyTeamNextGamesComponent } from './my-team-next-games/my-team-next-games.component';
import { MyTeamWinVenuesComponent } from './my-team-win-venues/my-team-win-venues.component';
import { MyTeamRivalResultsComponent } from './my-team-rival-results/my-team-rival-results.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { MyTeamLostGamesComponent } from './my-team-lost-games/my-team-lost-games.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    TeamComponent,
    TeamResultComponent,
    HomeComponent,
    GamePredictionComponent,
    MyTeamResultsComponent,
    MyTeamNextGamesComponent,
    MyTeamWinVenuesComponent,
    MyTeamRivalResultsComponent,
    PointsTableComponent,
    MyTeamLostGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
