import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { DataService } from '../data.service';
import { Team } from '../team';

@Component({
  selector: 'app-my-team-rival-results',
  templateUrl: './my-team-rival-results.component.html',
  styleUrls: ['./my-team-rival-results.component.css']
})
export class MyTeamRivalResultsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  Games: Game[];
  Teams: Team[];
  fixture: Game[] =[];
  results: Game[] = [];

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

  filterMyTeams(filterVal: string) {
    if (filterVal == "0") this.chosenTeam = this.Cache;
    else this.chosenTeam = filterVal;
    this.getGames();
  }

  filterRivalTeams(filterVal: string) {
    if (filterVal == "0") this.rivalTeam = this.Cache;
    else this.rivalTeam = filterVal;
    this.getGames();
  }

  getGames() {
    this.dataService.getResults().subscribe((a) =>
    this.getFixtures(a));
  }

  getFixtures(gameData){
    var tempArr : Game[] = [];
    for (let game of gameData){
      if (
        (game.hteam == this.chosenTeam || game.ateam == this.chosenTeam) && (game.ateam == this.rivalTeam || game.hteam == this.rivalTeam) && game.complete == 100){
        if (game.round < 20){
          tempArr.push(game);
        } else{
          this.fixture.push(game);
        }
      }
    }
    this.results = tempArr;
  }
  
  getResults(gameData){
    for (let game of gameData){}
  }
}
