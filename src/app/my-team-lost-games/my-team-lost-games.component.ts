import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { DataService } from '../data.service';
import { Team } from '../team';

@Component({
  selector: 'app-my-team-lost-games',
  templateUrl: './my-team-lost-games.component.html',
  styleUrls: ['./my-team-lost-games.component.css']
})
export class MyTeamLostGamesComponent implements OnInit {

  constructor(private dataService: DataService) { }
  Games: Game[];
  Teams: Team[];
  results: Game[] = [];
  lostGames: Game[] =[];

  @Input() chosenTeam: String;
  @Input() summary: String;
  @Input() Cache: String;
  @Input() rivalTeam: String;

  ngOnInit(): void {
    this.teamsData();
  }

  teamsData(): void {
    this.dataService.getTeams().subscribe((temp) => {this.Teams = temp;});
  }

  selectMyTeamLost(filterVal: string) {
    if (filterVal == "0") this.chosenTeam = this.Cache;
    else this.chosenTeam = filterVal;
    this.getGames();
  }

  getGames() {
    this.dataService.getResults().subscribe((a) =>
    this.getlostResult(a));
  }

  getlostResult(gameData) {
    var tempArr : Game[] =[];
    for (let game of gameData) {
      if (game.hteam == this.chosenTeam || game.ateam == this.chosenTeam) {
        if (game.winner != this.chosenTeam && (game.complete == 100)) {
          tempArr.push(game);
          if (game.round < 20) {}
        }
      }
    }
    this.lostGames = tempArr; 
  }
  
  getResults(gameData){
    for (let game of gameData){}
  }
}
