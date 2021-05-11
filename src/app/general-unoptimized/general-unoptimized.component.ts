
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { myTodo, TodoListInterface } from '../model/todo.constant';
import { fibonacci } from '../shared/utils.component';

@Component({
  selector: 'app-general-unoptimized',
  templateUrl: './general-unoptimized.component.html',
  styleUrls: ['./general-unoptimized.component.scss']
})
export class GeneralUnoptimizedComponent implements OnInit {

  myTodo = myTodo;
  value = '';
  selectedIndex;

  constructor() { }

  ngOnInit(): void {
    this.myTodo = myTodo;
  }

  selectItem(item) {
    this.selectedIndex = item;
    console.log({ item });
  }

  calculate(num) {
    return fibonacci(num);
  }

  viewItem(id) {
    this.selectedIndex = id;
  }

  increaseItemNum(id) {
    this.myTodo[id].num++;
    this.myTodo = [...this.myTodo]
  }

  decreaseItemNum(id) {
    this.myTodo[id].num--;
    this.myTodo = [...this.myTodo]
  }

  addItem() {
    const newItem: TodoListInterface = {
      description: '',
      name: this.value,
      index: 0,
      num: Math.floor(Math.random() * (10 - 30 + 1)) + 30,
      picture: ''
    }

    this.myTodo = [...this.myTodo, newItem];
    this.clearForm();
  }

  clearForm () {
    this.value = '';
  }
}
