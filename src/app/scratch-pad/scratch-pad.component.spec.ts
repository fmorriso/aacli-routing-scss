import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchPadComponent } from './scratch-pad.component';

describe('ScratchPadComponent', () => {
  let component: ScratchPadComponent;
  let fixture: ComponentFixture<ScratchPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScratchPadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratchPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
