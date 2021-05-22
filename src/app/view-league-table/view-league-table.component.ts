import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';
import { Tip } from '../tip';
import { Game } from '../game';
import { DataService } from '../data.service';



@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  teams!: Team[];
  tips!: Tip[];
  games!: Game[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  /*
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp; });
  }*/

  /*
   * Get games from the API
   * Filter the results to only get results where the home team won
  */
  
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { 
      var tempArr: Game[] = [];

      // loop through the raw data array to find games where the home team won
      // logic: hteam == winner from the Game model we get from the transformed API data
      
      temp.forEach(element => {
        if(element.hteam == element.winner) tempArr.push(element);
      });
      
      this.games = tempArr;  

      // Sort the games array based on the highest score by the winning team
      this.games.sort(this.compareFunc);    
    });
  }

  compareFunc(a: Game, b: Game) {
    const gameAScore = a.hscore;
    const gameBScore = b.hscore;

    let compare = 0;
    if (gameAScore < gameBScore) {
      compare = 1;
    } else if (gameAScore > gameBScore) {
      compare = -1;
    }

    return compare;
  }

  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp; });
  }


}
