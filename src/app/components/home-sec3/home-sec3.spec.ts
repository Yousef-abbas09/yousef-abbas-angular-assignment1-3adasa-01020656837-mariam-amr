import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec3 } from './home-sec3';

describe('HomeSec3', () => {
  let component: HomeSec3;
  let fixture: ComponentFixture<HomeSec3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSec3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
