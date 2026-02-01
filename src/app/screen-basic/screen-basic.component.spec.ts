import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBasicComponent } from './screen-basic.component';

describe('ScreenBasicComponent', () => {
  let component: ScreenBasicComponent;
  let fixture: ComponentFixture<ScreenBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
