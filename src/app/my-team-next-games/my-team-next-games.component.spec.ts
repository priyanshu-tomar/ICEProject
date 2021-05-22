import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamNextGamesComponent } from './my-team-next-games.component';

describe('MyTeamNextGamesComponent', () => {
  let component: MyTeamNextGamesComponent;
  let fixture: ComponentFixture<MyTeamNextGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamNextGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamNextGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
