import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOperationsComponent } from './room-operations.component';

describe('RoomOperationsComponent', () => {
  let component: RoomOperationsComponent;
  let fixture: ComponentFixture<RoomOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
