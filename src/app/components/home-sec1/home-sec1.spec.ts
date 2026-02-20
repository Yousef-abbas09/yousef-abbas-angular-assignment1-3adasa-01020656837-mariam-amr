import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec1 } from './home-sec1';

describe('HomeSec1', () => {
  let component: HomeSec1;
  let fixture: ComponentFixture<HomeSec1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSec1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
