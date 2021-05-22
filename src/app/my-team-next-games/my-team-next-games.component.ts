import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team';
import { Game } from '../game';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-team-next-games',
  templateUrl: './my-team-next-games.component.html',
  styleUrls: ['./my-team-next-games.component.css']
})
export class MyTeamNextGamesComponent implements OnInit {

  constructor(private dataService: DataService) { }
  nextGame: Game[] = [];
  allTeams: Team[];
  allGames: Game[];
  results: Game[];

  @Input() rivalTeam: String;
  @Input() chosenTeam: String;
  @Input() summary: String;
  @Input() Cache: String;

  ngOnInit() {
    this.teamsData();
  }

  teamsData(): void {
    this.dataService.getTeams().subscribe((temp) => {this.allTeams = temp;});
  }

  selectMyTeam(filterVal: string) {
    if (filterVal == "0") this.chosenTeam = this.Cache;
    else this.chosenTeam = filterVal;
    this.getGames();
  }

  getGames() {
    this.dataService.getResults().subscribe((a) => 
    this.getTeamFixtures(a));
  }

  getTeamFixtures(gameData) {
    var tempArr : Game[] = [];
    var count = 0;
    for (let game of gameData) {
      if (
        (game.hteam == this.chosenTeam || game.ateam == this.chosenTeam) && count > 4){
        if (game.round > 19) {
          tempArr.push(game);
        }
      }count++;
    } this.nextGame = tempArr;
  } 

  getResults(gameData) {
    for (let game of gameData) {}
  }
}
