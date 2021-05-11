import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpuTodoInputComponent } from './opu-todo-input.component';

describe('OpuTodoInputComponent', () => {
  let component: OpuTodoInputComponent;
  let fixture: ComponentFixture<OpuTodoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpuTodoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpuTodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
