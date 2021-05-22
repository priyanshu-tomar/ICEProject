import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamWinVenuesComponent } from './my-team-win-venues.component';

describe('MyTeamWinVenuesComponent', () => {
  let component: MyTeamWinVenuesComponent;
  let fixture: ComponentFixture<MyTeamWinVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamWinVenuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamWinVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
