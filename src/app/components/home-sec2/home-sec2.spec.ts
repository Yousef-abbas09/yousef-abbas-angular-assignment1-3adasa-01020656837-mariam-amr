import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec2 } from './home-sec2';

describe('HomeSec2', () => {
  let component: HomeSec2;
  let fixture: ComponentFixture<HomeSec2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSec2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
