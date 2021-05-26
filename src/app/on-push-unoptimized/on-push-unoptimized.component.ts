import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { myTodo } from '../model/todo.constant';

@Component({
  selector: 'app-on-push-unoptimized',
  templateUrl: './on-push-unoptimized.component.html',
  styleUrls: ['./on-push-unoptimized.component.scss'],
})
export class OnPushUnoptimizedComponent {
  myTodo = myTodo;
  selectedIndex = undefined;
  constructor(private _cdr: ChangeDetectorRef) {}

  addItem(newItem) {
    console.log('Adding new item');
    this.myTodo = [newItem, ...this.myTodo];
  }

  viewItem(id) {
    this.selectedIndex = id;
  }

  increaseItemNum(id) {
    this.myTodo[id].num++;
  }

  decreaseItemNum(id) {
    this.myTodo[id].num--;
  }

  updateList() {
    this.myTodo = [...this.myTodo];
  }

  closeItem() {
    this.selectedIndex = undefined;
  }
}
