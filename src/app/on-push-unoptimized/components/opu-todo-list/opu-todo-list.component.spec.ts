import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpuTodoListComponent } from './opu-todo-list.component';

describe('OpuTodoListComponent', () => {
  let component: OpuTodoListComponent;
  let fixture: ComponentFixture<OpuTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpuTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpuTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
