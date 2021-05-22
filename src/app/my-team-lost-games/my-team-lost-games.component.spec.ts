import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamLostGamesComponent } from './my-team-lost-games.component';

describe('MyTeamLostGamesComponent', () => {
  let component: MyTeamLostGamesComponent;
  let fixture: ComponentFixture<MyTeamLostGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamLostGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamLostGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
