import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamRivalResultsComponent } from './my-team-rival-results.component';

describe('MyTeamRivalResultsComponent', () => {
  let component: MyTeamRivalResultsComponent;
  let fixture: ComponentFixture<MyTeamRivalResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamRivalResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamRivalResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
