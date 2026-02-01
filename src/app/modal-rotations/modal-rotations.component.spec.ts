import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRotationsComponent } from './modal-rotations.component';

describe('ModalRotationsComponent', () => {
  let component: ModalRotationsComponent;
  let fixture: ComponentFixture<ModalRotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRotationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
