import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRotationsComponent } from './screen-rotations.component';

describe('ScreenRotationsComponent', () => {
  let component: ScreenRotationsComponent;
  let fixture: ComponentFixture<ScreenRotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenRotationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenRotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
