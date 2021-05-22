import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { TeamComponent } from './team/team.component';
import { GamePredictionComponent } from './game-prediction/game-prediction.component';
import { MyTeamNextGamesComponent} from './my-team-next-games/my-team-next-games.component';
import { MyTeamResultsComponent} from './my-team-results/my-team-results.component';
import { MyTeamRivalResultsComponent} from './my-team-rival-results/my-team-rival-results.component';
import { MyTeamWinVenuesComponent} from './my-team-win-venues/my-team-win-venues.component';
const routes: Routes = [
  { path: 'ViewLeagueTable', component: ViewLeagueTableComponent},
  { path: 'Team', component: TeamComponent},
  { path: 'GamePrediction', component: GamePredictionComponent},
  { path: 'MyTeamNextGames', component: MyTeamNextGamesComponent},
  { path: 'MyTeamResults', component: MyTeamResultsComponent},
  { path: 'MyTeamRivalResults', component: MyTeamRivalResultsComponent},
  { path: 'MyTeamWinVenues', component: MyTeamWinVenuesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
