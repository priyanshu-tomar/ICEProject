import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Team } from '../team';
import { Tip } from '../tip';
import { Standings } from '../standings';
@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  constructor(private dataService: DataService) { }
  allStandings: Standings[];

  ngOnInit() {
    this.teamsData();
  }
  
  teamsData(): void {
    this.dataService.getStandings().subscribe((temp) => {this.allStandings = temp;});
  }
}
