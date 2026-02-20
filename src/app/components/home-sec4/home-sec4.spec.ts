import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec4 } from './home-sec4';

describe('HomeSec4', () => {
  let component: HomeSec4;
  let fixture: ComponentFixture<HomeSec4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSec4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
