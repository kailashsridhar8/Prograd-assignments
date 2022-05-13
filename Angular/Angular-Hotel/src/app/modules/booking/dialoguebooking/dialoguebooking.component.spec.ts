import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguebookingComponent } from './dialoguebooking.component';

describe('DialoguebookingComponent', () => {
  let component: DialoguebookingComponent;
  let fixture: ComponentFixture<DialoguebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoguebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoguebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
