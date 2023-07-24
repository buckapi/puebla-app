import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraslationComponent } from './traslation.component';

describe('TraslationComponent', () => {
  let component: TraslationComponent;
  let fixture: ComponentFixture<TraslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraslationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
