import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TodoListInterface } from 'src/app/model/todo.constant';
import { fibonacci } from 'src/app/shared/utils.component';

@Component({
  selector: 'app-opu-todo-list',
  templateUrl: './opu-todo-list.component.html',
  styleUrls: ['./opu-todo-list.component.scss'],
})
export class OpuTodoListComponent implements OnInit {
  @Input() list: TodoListInterface[];
  @Output() onViewItem = new EventEmitter<any>();
  @Output() onIncreaseNum = new EventEmitter<any>();
  @Output() onDecreaseNum = new EventEmitter<any>();
  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  calculate(num) {
    return fibonacci(num);
  }

  viewItem(index) {
    this.onViewItem.emit(index);
  }

  increaseNum(index) {
    this.onIncreaseNum.emit(index);
  }

  decreaseNum(index) {
    this.onDecreaseNum.emit(index);
  }
}
