import { Component, Input, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { DataService} from '../data.service';
import { Team } from '../team';
import { Tip } from '../tip';

@Component({
  selector: 'app-game-prediction',
  templateUrl: './game-prediction.component.html',
  styleUrls: ['./game-prediction.component.css']
})
export class GamePredictionComponent implements OnInit {

  constructor(private dataService: DataService) { }
  @Input() chosenTeam: String;
  @Input() summary: String;
  @Input() Cache: String;

  teams: Team[];
  gameTip: Tip[] = [];

  ngOnInit(){
    this.teamsData();
  }
  
  teamsData(): void {
    this.dataService.getTeams().subscribe((temp) => {this.teams = temp;});
  }

  selectMyTeam(filter: string) {
    if (filter == '0') this.chosenTeam = this.Cache;
    else {
      this.chosenTeam = filter;
    }
    this.predictions();
  }

  predictions():void{
    this.dataService.getTips().subscribe((temp) =>{ this.checkTip(temp);});
  }
  
  checkTip(Tips): void{
   
     var tempArr : Tip[] = [];
    for(let a of Tips)
    {
      if (a.hteam == this.chosenTeam || a.ateam == this.chosenTeam) {
        if (a.tip != this.chosenTeam) {
          a.confidence = 100 - a.confidence;
        }
        if (a.sourceid == 1) {
          tempArr.push(a);
        }
      }
    }
     this.gameTip = tempArr;
  }
}
