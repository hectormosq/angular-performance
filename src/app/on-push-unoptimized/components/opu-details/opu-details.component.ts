import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TodoListInterface } from 'src/app/model/todo.constant';
import { fibonacci } from 'src/app/shared/utils.component';

@Component({
  selector: 'app-opu-details',
  templateUrl: './opu-details.component.html',
  styleUrls: ['./opu-details.component.scss']
})
export class OpuDetailsComponent {
  @Input() item: TodoListInterface;

  @Output() onIncreaseNum = new EventEmitter<any>();
  @Output() onDecreaseNum = new EventEmitter<any>();

  constructor() {}

  calculate(num) {
    return fibonacci(num);
  }

  increaseNum(index) {
    this.onIncreaseNum.emit(index);
  }

  decreaseNum(index) {
    this.onIncreaseNum.emit(index);
  }
}
