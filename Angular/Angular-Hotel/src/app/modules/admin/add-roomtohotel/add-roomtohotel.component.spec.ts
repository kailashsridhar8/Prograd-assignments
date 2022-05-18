import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomtohotelComponent } from './add-roomtohotel.component';

describe('AddRoomtohotelComponent', () => {
  let component: AddRoomtohotelComponent;
  let fixture: ComponentFixture<AddRoomtohotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoomtohotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoomtohotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
