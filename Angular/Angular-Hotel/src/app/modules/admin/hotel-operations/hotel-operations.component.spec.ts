import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOperationsComponent } from './hotel-operations.component';

describe('HotelOperationsComponent', () => {
  let component: HotelOperationsComponent;
  let fixture: ComponentFixture<HotelOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
