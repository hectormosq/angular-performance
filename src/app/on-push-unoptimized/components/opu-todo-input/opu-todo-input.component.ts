import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TodoListInterface } from 'src/app/model/todo.constant';

@Component({
  selector: 'app-opu-todo-input',
  templateUrl: './opu-todo-input.component.html',
  styleUrls: ['./opu-todo-input.component.scss']
})
export class OpuTodoInputComponent {

  value = '';
  @Output() onNewItem: EventEmitter<TodoListInterface> = new EventEmitter();

  constructor() { }

  addItem() {
    const newItem: TodoListInterface = {
      description: '',
      name: this.value,
      index: 0,
      num: Math.floor(Math.random() * (10 - 30 + 1)) + 30,
      picture: 'https://placekitten.com/g/300/300'
    }

    this.onNewItem.emit(newItem);
    this.clearForm();
  }

  clearForm () {
    this.value = '';
  }

}
