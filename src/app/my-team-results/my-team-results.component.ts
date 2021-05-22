import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Team } from '../team';
import { Game } from '../game';

@Component({
  selector: 'app-my-team-results',
  templateUrl: './my-team-results.component.html',
  styleUrls: ['./my-team-results.component.css']
})
export class MyTeamResultsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  results: Game[] = [];
  gameResults: Game[] = [];
  Games: Game[];
  Teams: Team[];

  @Input() Cache: String;
  @Input() rivalTeam: String;
  @Input() chosenTeam: String;
  @Input() summary: String;

  ngOnInit(): void {
    this.teamsData();
  }
  teamsData(): void {
    this.dataService.getTeams().subscribe((temp) => {this.Teams = temp;});

  }
  filterMyresult(filterVal: string) {
    if (filterVal == "0") this.chosenTeam = this.Cache;
    else this.chosenTeam = filterVal;
    this.getGames();
  }
  getGames() {
    this.dataService.getResults().subscribe((a) =>
    this.getgameResults(a));
    this.gameResults= [];
  }

  getgameResults(gameData){
    for(let game of gameData)
    {
      if ((game.hteam == this.chosenTeam || game.ateam == this.chosenTeam) && (game.complete == 100))
      {   
        if (game.round < 20) 
        {
          this.gameResults.push(game);
        }  
      }
    }
  }
  getResults(gameData){
    for (let game of gameData){}
  }

}
